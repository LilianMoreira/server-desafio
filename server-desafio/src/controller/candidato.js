const mongoose = require('mongoose');

//carrego o modelo de dados
const Candidato = mongoose.model('Candidato');

module.exports = {
    
    //cria a funcao de tela de insert
    //nela executa a funcao de insert no banco de dados
    //os dados sao passados no corpo da requisicao via post
    async insert (req, res) {
        const candidato = await Candidato.create(req.body);

        return res.json(candidato);
    },

    async get (req, res) {
        const candidato = await Candidato.find();

        return res.json(candidato);
    },

    async details (req, res) {
        //a requisicao traz os parametros informados, sendo buscado o id (GET)
        const candidatos = await Candidato.findById(req.params.id);

        return res.json(candidatos);
    },


}