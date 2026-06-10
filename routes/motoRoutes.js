const express = require('express');
const router = express.Router();
const motoController = require('../controllers/motoController');

// GET /api/motos
router.get('/', motoController.getAllMotos);

// GET /api/motos/:id
router.get('/:id', motoController.getMotoById);

// POST /api/motos
router.post('/', motoController.createMoto);

// PUT /api/motos/:id
router.put('/:id', motoController.updateMoto);

// DELETE /api/motos/:id
router.delete('/:id', motoController.deleteMoto);

module.exports = router;
