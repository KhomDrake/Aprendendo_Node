var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/NPM', (req, res, next) => {
  res.render('NPM');
});

router.get('/Twitter/parte1', (req, res, next) => {
  res.render('Twitter');
});

router.get('/Twitter/parte2', (req, res, next) => {
  res.render('Twitter2');
});

module.exports = router;
