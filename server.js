// because this is an express server, we are going to 'require' express
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();

const hc = require('./house_cleaners');

const app = express();
app.use(express.json()); app.use(bodyParser.json());

//this is an endpoint to test and see if our server and app can talk to each other:
app.get('/api/cleaners', hc.get);
app.get('/api/cleaners/:search', hc.search)
app.post('/api/cleaners', hc.add)
app.delete('/api/cleaners/:id', hc.delete);
// app.put('/api/cleaners', hc.update)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
