require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/api/blogs');

const app = express();

// illeviates any browser cors issue
app.use(cors());

// puts the db info into a json - middleware
app.use(bodyParser.json());

// db config/url
const db = process.env.DB_CONN;

// Connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true } )
  .then(() => {
    console.log('connected to mongoDB server');
  })
  .catch(err => {
    console.log(err);
  });

// define routes path
app.use('/api/blogs', routes);
// Setup for heroku and local port 30001
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});