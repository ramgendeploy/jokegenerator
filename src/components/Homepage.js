import React, { Fragment } from 'react'
import Form from './Form';
import Jokes from './Jokes';

const Homepage = () => {
    return (
        <Fragment>
            <Form />
            <span>Results: </span>
            <Jokes />
        </Fragment>
    )
}

export default Homepage