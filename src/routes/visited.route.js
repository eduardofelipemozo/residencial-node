const express = require('express');
const router = express.Router();

const visitantesController = require('../controllers/visitantes.controller');


router.get('/', visitantesController.getVisitantesList);

 
router.get('/:id',visitantesController.getAllVisitantesById);


router.post('/', visitantesController.createNewVisitantes);


router.put('/:id', visitantesController.updateVisitantes);


router.delete('/:id', visitantesController.deleteVisitantes);

module.exports = router;