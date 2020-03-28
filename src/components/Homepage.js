import React, { Fragment, useState } from 'react'
import Form from './Form';
import Jokes from './Jokes';

const Homepage = () => {
    const [jokes, setJokes] = useState([])
    return (

        <Fragment>
            <Form renderJokes={setJokes} />
            <div className="headerR"><span>Results: </span></div>
            {
                jokes.map((joke, i) => {
                    return <Jokes key={i} text={joke} />

                })
            }
        </Fragment>
    )
}

export default Homepage