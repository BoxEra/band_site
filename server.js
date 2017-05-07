const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');
const db = require('./db');

const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://admin:password@ds133271.mlab.com:33271/box-era-db';

app.use(cors());
app.use(require('./router'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

db.connect(URL, (err) => {
  if (err) {
    console.log('Fuck! DB wont connect');
    process.exit();
  } else {
    app.listen(3000, () => {
      console.log('Magic is happening...');
    });
  }
});
