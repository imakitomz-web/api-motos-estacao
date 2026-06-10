const Moto = require('../models/motoModel');

exports.getAllMotos = async (req, res) => {
  try {
    const motos = await Moto.find();
    res.json(motos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar moto', erro: err.message });
  }
};

exports.getMotoById = async (req, res) => {
  try {
    const moto = await Moto.findById(req.params.id);
    if (!moto) return res.status(404).json({ mensagem: 'Moto não encontrada' });
    res.json(moto);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar moto', erro: err.message });
  }
};

exports.createMoto = async (req, res) => {
  try {
    const novaMoto = new Moto(req.body);
    await novaMoto.save();
    res.status(201).json(novaMoto);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao criar moto', erro: err.message });
  }
};

exports.updateMoto = async (req, res) => {
  try {
    const motoAtualizado = await Moto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!motoAtualizado) return res.status(404).json({ mensagem: 'Moto não encontrada' });
    res.json(motoAtualizado);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao atualizar moto', erro: err.message });
  }
};

exports.deleteMoto = async (req, res) => {
  try {
    const motoRemovido = await Moto.findByIdAndDelete(req.params.id);
    if (!motoRemovido) return res.status(404).json({ mensagem: 'Moto não encontrada' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir moto', erro: err.message });
  }
};
