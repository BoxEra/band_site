const express = require('express');
const router = express.Router();

const db = require('./db.js');

const nodemailer = require('nodemailer');


router.get('/getMusic', (req, res) => {
  let collection = db.get().collection('music');

  collection.find().toArray((err, docs) => {
    res.json({music: docs});
  });
});

router.get('/getPhotos', (req, res) => {
  let collection = db.get().collection('photos');

  collection.find().toArray((err, docs) => {
    res.json({photos: docs});
  });
});

router.get('/getTourDates', (req, res) => {
  let collection = db.get().collection('tourDates');

  collection.find().toArray((err, docs) => {
    res.json({tourDates: docs});
  });
});

router.get('/sendEmail', (req, res) => {
  const smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: "contact@boxeramusic.com",
          pass: "sweetCreamFunk"
      }
  });

  const mailOpts = {
     from: 'test@example.com', 
     to: 'contact@boxeramusic.com',
     subject: 'Website contact form',
     text: 'test'
 };

 smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.status(500).json(error);
      }
      //Yay!! Email sent
      else {
          res.json(response);
      }
  });
});

module.exports = router;
