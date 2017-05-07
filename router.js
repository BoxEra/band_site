const express = require('express');
const router = express.Router();

const db = require('./db.js');

router.get('/music', (req, res) => {
  let collection = db.get().collection('music');

  collection.find().toArray((err, docs) => {
    res.json({music: docs});
  });
});

router.get('/photos', (req, res) => {
  let collection = db.get().collection('photos');

  collection.find().toArray((err, docs) => {
    res.json({photos: docs});
  });
});

router.get('/tourDates', (req, res) => {
  let collection = db.get().collection('tourDates');

  collection.find().toArray((err, docs) => {
    res.json({tourDates: docs});
  });
});

module.exports = router;
