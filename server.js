'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy'); // REVIEW: We've added a new package here to our requirements, as well as in the package.json
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || '5432'; // TODO: Don't forget to set your own conString
const client = new pg.Client(conString);
client.connect(console.error);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


// NOTE: Routes for requesting HTML resources
app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
