import React, { useState } from 'react'
export const Form = ({ renderJokes }) => {

  const [quantity, setQ] = useState(1);
  const [btnSelected, setBtnSelected] = useState(1);
  const [seed, setSeed] = useState("");
  const [gentext, setGentext] = useState('Generate');
  const [getting, setGetting] = useState(0);

  const down = () => {
    if (quantity > 0) setQ(quantity + -1);
  }
  const up = () => {
    if (quantity < 10) setQ(quantity + 1);
  }
  const getJokes = () => {
    setGentext('Generating...')
    if (!getting) {
      setGetting(1);
      fetch(`https://ramagg.com/jokegenerator/generate?seed=${seed}&q=${quantity}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          renderJokes(data.jokesList);
          setGentext('Generate')
          setGetting(0);

        });
    } else {
      console.log('Generating the jokes')
    }

  }
  return (
    <div className="formbox">
      <div className="btnBox">
        <button className={btnSelected === 1 ? "btnGo Selected" : "btnGo"} onClick={() => setBtnSelected(1)}>RandomJokes</button>
        <button className={btnSelected === 2 ? "btnGo Selected" : "btnGo"} onClick={() => setBtnSelected(2)}>DadJokes</button>
      </div>
      <div className="seedBox">
        <span>Seed:</span>
        <div className="inputBox">
          <input className="seedInput" value={seed} onChange={(e) => { setSeed(e.target.value) }} />

          <div className="quantityBox">
            <span>Q: {quantity}</span>
            <div className="actionBox">
              <a className="actionBtn" onClick={down}><i className="fas fa-angle-left"></i></a>
              <a className="actionBtn" onClick={up}><i className="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>
        <button className="btnGo btnGenerate" onClick={getJokes}>{gentext}</button>
      </div>
    </div>
  )
}

export default Form;