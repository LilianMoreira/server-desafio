const mongoose = require('mongoose');

const CandidatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 200
    },
    cargo: {
        type: String,
        uppercase: true,
        minlength: 3,
        maxlength: 200
    },
    nascimento: {
        type: Date,
    },
    estadoCivil: {
        type: String,
        minlength: 3,
        maxlength: 10
    },
    sexo: {
        type: String,
        minlength: 3,
        maxlength: 10
    },
    endereco: {
        endereco: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 200
        },
        bairro: {
            type: String,
            minlength: 3,
            maxlength: 100
        },
        cidade: {
            type: String,
            minlength: 3,
            maxlength: 100
        },
        cep: {
            type: String,
            minlength: 3,
            maxlength: 17
        },
    },
    tel1: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    tel2: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    celular: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    contato: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    tel1: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 100
    },
    documentos: {
        identidade: {
            type: String,
            minlength: 3,
            maxlength: 100
        },
        cpf: {
            type: String,
            minlength: 3,
            maxlength: 20
        },
        veiculo: {
            type: String,
            minlength: 3,
            maxlength: 5
        },
        habilitacao: {
            type: String,
            minlength: 3,
            maxlength: 5
        },
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Candidato', CandidatoSchema);
    