require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require(__dirname + '/models/index');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
