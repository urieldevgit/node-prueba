const express = require('express');

const app = express();
const { PORT } = process.env;
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const { errors } = require('celebrate');
const router = require('../routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.use('/v1/', router);
app.use(errors());

module.exports = { app, PORT };
