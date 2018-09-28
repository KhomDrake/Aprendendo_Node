// mesma coisa do que tinha lá no server.js
const express = require('express');
// mesma coisa, só estou chamando agora o arquivo serial.js, que é onde pego a informação do arduino.
const { ArduinoData } = require('./serial')
// usando a váriavel express, acesso a função router, que me retorna um objeto do tipo Router
const router = express.Router();
// é complicado explicar o que é uma router, mas tentarei
/*

    Router significa roteador.
    Toda vez que acesso uma pagina web, eu posso fazer alguns tipos de requests(pedidos) a pagina
    Get, Post, Edit, Delete.
    Get: Estou pegando um dado. Ex: quando baixo um arquivo 
    Post: Quando estou enviando um dado. Ex: quando jogo um arquivo no google drive.
    Edit: Quando estou alterando um dado já existente. Ex: alterando o meu nome no github
    Delete: Quando apaga algum arquivo. Ex: apago uma foto minha do instagram.

    Router eu utilizo para gerenciar cada request(pedido) que o usuario fizer em cada pagina.
*/

// aqui, é o código que vai ser executando quando o usuário fizer um request get na pagina, que pode simplesmente ser acessar a pagina.
// Lembrando que esse '/', é onde o usuário vai ter que acessar para ser chamado esse código
// que nesse caso seria: localhost:3000/api ou localhost:3000/api/
// se fizesse um router.get('/br'), seria localhost:3000/api/br
router.get('/', (request, response, next) => {

    // Aqui é onde pego as informações que está la no arduino.
    // let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    // let average = (sum / ArduinoData.List.length).toFixed(2);

    // E aqui, mando essa informação para a pagina que está routeada em localhost:3000/api.
    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        // average: isNaN(average) ? 0 : average
    });

});

// aqui estou exportando esse código, permitindo que ele esteja acessivel atráves da função require()
module.exports = router;

// ir para o código serial.js