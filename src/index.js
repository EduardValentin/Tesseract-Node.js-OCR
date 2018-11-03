
require('dotenv').config();

const express = require('express');
const db = require(__dirname + '/models/index');


const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => res.status(200).send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))