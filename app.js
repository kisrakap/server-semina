// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const categoriesRouter = require('./app/api/v1/categories/router')
const v1 = '/api/v1/cms'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// adding this
// catch 404 and forward to error handler

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to api semina",
  });
});

app.use(v1, categoriesRouter)

module.exports = app;
