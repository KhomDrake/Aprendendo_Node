var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/Middlewares', (req, res, next) => {
  res.render('Middlewares');
});

router.get('/FuncoesAnonimas', (req, res, next) => {
  res.render('Anonimas');
});

module.exports = router;
