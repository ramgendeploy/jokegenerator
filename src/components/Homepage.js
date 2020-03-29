import React, { Fragment, useState } from 'react'
import Form from './Form';
import Jokes from './Jokes';

const Homepage = () => {
    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(false);
    return (

        <Fragment>
            <Form renderJokes={setJokes} loading={setLoading} />
            <div className="headerR"><span>Results: </span></div>
            <img src="jokegenerator/src/loading.svg" height="100px" className={loading ? 'show' : 'hidden'} />
            {
                jokes.map((joke, i) => {
                    return <Jokes key={i} text={joke} />

                })
            }
        </Fragment>
    )
}

export default Homepage