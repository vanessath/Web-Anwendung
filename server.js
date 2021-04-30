'use strict';

const Server = require('fhw-web');

const config = {
    routing: {
        magic: true
    }};

const app = new Server(config);

app.start();