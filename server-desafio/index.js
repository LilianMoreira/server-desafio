/** 
*Arquivo: server.js
*Descrição: responsavel por levantar o servidor
*Author: Lilian Moreira
*/

//crio uma funcao express
const express = require('express');

//chama o MongoDB
const mongoose = require('mongoose');

//para fazer o require no diretorio
const requireDir = require('require-dir');

//para fazer a permissao de acesso de outras api
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');

const swaggerDocs = require('./src/swagger.json');

//inicia o app
const app = express();
//diz para minha aplicacao permitir que insira os dados no formato de json
app.use(express.json());
//aqui eu posso passar quais dominios quero permitir cors(aqui)
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

mongoose.connect('mongodb://localhost:27017/crud-desafio', {useNewUrlParser: true});

requireDir('./src/models')

app.use('/api', require('./src/routes/routes'));

app.listen(8000);

