const express = require('express');
const routes = express.Router();

const candidatoController = require("../controller/candidato.js");

//console.log('teste');
//quando criar algo, usa post
//insert
routes.post('/candidatos/', candidatoController.insert);

routes.get('/candidatos/', candidatoController.get);

routes.details('/candidatos/:id', candidatoController.get);

console.log("entrou")
module.exports = routes;
