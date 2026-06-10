const mongoose = require('mongoose');

const motoSchema = new mongoose.Schema({
    proprietario: {
        type: String,
        required: [true, 'É necessário que a moto tenha um proprietário.']
    },
    marca: {
        type: String,
        required: [true, 'É necessário informar a marca da moto.']
    },
    ano: {
        type: Number,
        required: [true, 'É necessário informar o ano da moto.']
    },
    modelo: {
        type: String,
        required: [true, 'É necessário informar o modelo da moto.']
    },
    placa: {
        type: String,
        required: [true, 'A moto precisa ter uma placa.']
    },
    cor: {
        type: String,
        required: [true, 'É necessário uma cor para melhorar a identificação.']
    },
    foto: {
        type: String, // Pode ser uma URL ou caminho de arquivo
        required: [true, 'A foto é obrigatória.']
    }
    }, {
    timestamps: true
    });

module.exports = mongoose.model('Moto', motoSchema);