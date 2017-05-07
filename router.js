const express = require('express');
const router = express.Router();

const db = require('./db.js');

router.get('/music', (req, res) => {
  let collection = db.get().collection('music');

  collection.find().toArray((err, docs) => {
    res.json({music: docs});
  });
});

module.exports = router;
