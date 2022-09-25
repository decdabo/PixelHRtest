const path = require('path');
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const { db } = require("./database");
const app = express();
db();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/tasks', require("./routes/tasks"));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
