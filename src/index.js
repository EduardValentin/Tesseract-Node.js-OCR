require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require(__dirname + '/models/index');
const userRouter = require('./routes/user-router');
const imageRouter = require('./routes/image-router');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/', userRouter);
app.use('/', imageRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
