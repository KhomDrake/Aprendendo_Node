// localiza na pasta node_modules a pasta express que dentro dela, possui um arquivo do tipo javascript e atribui o código desse script para essa váriavel.
const express = require('express');
// faz a mesma coisa do que na linha a cima, só que procura a pasta body-parser
const bodyParser = require('body-parser');
// a váriavel express é uma função, que retornar um objeto do tipo express, que é um modulo para criar servers http
const app = express();

// tudo isso é coisas do modulo body-parser, nem eu entendo muito isso
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// então ignore, só saiba que exista

// quando rodo esse código(server.js), ele vai criar um server local na porta 3000 (const server = app.listen(3000))
// esse app.use, me refiro a quando o usuario acessar localhost:3000/api, o código vai chamar o código que está na pasta app e que se chama controller(app/controller)
app.use('/api', require('./app/controller'));
// poderia fazer isso
/*
Quando o usuário acessar localhost:3000/tudo
app.use('/tudo', (req, res) => 
{
    res.json({
        data: "Tudo Bom ?"
    });
});
essa função anonima
"
(req, res) => 
{
    res.json({
        data: "Tudo Bom ?"
    });
})
"
vai ser executada e vai aparecer a informação "tudo bom ?" na pagina
*/

// setando qual porta o meu servidor local vai ser hosteado.
const server = app.listen(3000);
console.log("Express started at port %s", server.address().port);

// olhar o arquivo controller na pasta app.