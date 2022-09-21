const mongoose = require('mongoose');

const { urlDb } = require('../config');

mongoose.connect(urlDb);

const db = mongoose.connection;

// (5) export db supaya bisa digunakan oleh file lain yang membutuhkan
module.exports = db;