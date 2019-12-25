import 'babel-polyfill';
// const express = require('express');
import express from 'express'; // because webpack
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const context = {};

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    const html = `<html>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
    </head>
    <body>
        <div id="root">
            ${content}
        </div>
        <script src="client_bundle.js"></script>
    </body>
</html>`;

    // res.send('App is working!!');
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
});