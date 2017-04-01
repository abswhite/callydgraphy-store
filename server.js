'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || '5432';
const client = new pg.Client(conString);
client.connect(console.error);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


// NOTE: Routes for requesting HTML resources
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/cart', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/store', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/services', (request, response) => response.sendFile('index.html', {root: './public'}));


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
