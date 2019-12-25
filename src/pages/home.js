import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {

    const exampleMethod = () => {
        console.log('JS');
    }

    const head = () => {
        return(
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
                <meta name="author" content="Jovicica Raickone" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Page Title</title>
            </Helmet>
        )
    }

    return (
        <div>
            {head()}
            <h1>Home page</h1>
            <p>Content</p>
            <button onClick={() => exampleMethod()}>Click</button>
        </div>
    );
};

export default Home;