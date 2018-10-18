
const express = require('express');
const database = require('./models/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

database.createTables();
database.dropTables();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))