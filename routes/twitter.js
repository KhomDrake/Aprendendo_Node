var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('twitter');
});

router.get('/parte1', (req, res, next) => {
  res.render('Twitter1');
});

router.get('/parte2', (req, res, next) => {
  res.render('Twitter2');
});

router.get('/parte3', (req, res) => {
  res.render('Twitter3');
});

module.exports = router;
