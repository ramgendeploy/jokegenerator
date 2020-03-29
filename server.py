#!/usr/bin/env python3
import aiohttp
import asyncio
import uvicorn
import os
from fastai import *
from fastai.vision import *
from io import BytesIO
from starlette.applications import Starlette
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import HTMLResponse, JSONResponse
from starlette.staticfiles import StaticFiles
import requests


path = Path(__file__).parent

app = Starlette()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["X-Requested-With", "Content-Type"],
)
app.mount(
    "/jokegenerator/static", StaticFiles(directory="/var/www/projects/jokegenerator/build/static"),
)
app.mount(
    "/jokegenerator/css", StaticFiles(directory="/var/www/projects/jokegenerator/build/css"),
)
# app.mount('/prod-view/components', StaticFiles(directory='app/prod-view/components'))


export_file_name = "jokeGenerator.pkl"
learn = load_learner(f"{path}/models", export_file_name)
print("Model loaded")


def sorted_prob(classes, probs):
    pairs = []
    for i, prob in enumerate(probs):
        pairs.append([prob.item(), i])
    pairs.sort(key=lambda o: o[0], reverse=True)
    return pairs


# loop = asyncio.get_event_loop()
# tasks = [asyncio.ensure_future(setup_learner())]
# learn = loop.run_until_complete(asyncio.gather(*tasks))[0]
# loop.close()


@app.route("/jokegenerator")
async def homepage(request):
    html_file = path / "build" / "index.html"
    return HTMLResponse(html_file.open().read())


# @app.route('/jokegenerator/analyze', methods=['POST'])
# async def analyze(request):
#     # img_data = await request.form()
#     # img_bytes = await (img_data['file'].read())
#     # img = open_image(BytesIO(img_bytes))

#     # prediction = learn.predict(img)[2]

#     # bests = sorted_prob(classes, prediction)

#     return JSONResponse({'result': str(bests)})


@app.route("/jokegenerator/generate", methods=["GET"])
async def generate(request):
    qp = request.query_params

    seed = qp.get("seed")
    words = qp.get("words")
    Q = qp.get("q")
    temp = qp.get("temp")

    if seed == None:
        seed = ""
    if words == None:
        words = 50
    if Q == None:
        Q = 1
    if temp == None:
        temp = 0.6

    words = int(words)
    Q = int(Q)
    temp = float(temp)

    results = []

    print("Getting one joke")
    for i in range(Q):
        print("One done\n")
        results.append(learn.predict(seed, words, temperature=temp))

    return JSONResponse({"jokesList": results})


if __name__ == "__main__":
    if "serve" in sys.argv:
        uvicorn.run(app=app, host="127.0.0.1", port=2552, log_level="info")
