// require é uma função que pode fazer duas coisas.
// let express = require('express');
// Nesse caso, ele vai ir ate a pasta node_modules e procurar pela pasta express e ira retornar o script que encontrará lá.
// Eu uso dessa forma para puxar modulos que instalei nessa pasta
// ou
// Se eu passar um caminho
// require('./routes/index');
// ele vai ate esse caminho e vai localizar o arquivo index para pegar a script que está dentro de 
// module.exports.

// puxando o modulo http-erros
let createError = require('http-errors');
// puxando o modulo express, esse serve para eu criar um server local. É um dos mais famosos.
let express = require('express');
// puxando o modulo path
let path = require('path');
// puxando o modulo cookie-parser
let cookieParser = require('cookie-parser');
// puxando o modulo morgan
let logger = require('morgan');

// puxando o script que está dentro de module.exports que está dentro do script na pasta routers que se chama index.js
let indexRouter = require('./routes/index');

// criando uma váriavel e transformando ela em uma váriavel do tipo express.
let app = express();

// configurações do servidor.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// coisas que vou usar no servidos. Padrão isso
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use('/', indexRouter);

// Server Local estará sendo hosteado na port 3000 do pc.
app.listen(3000);

module.exports = app;
