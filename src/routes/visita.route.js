const express = require('express');
const router = express.Router();

const visitaController = require('../controllers/visita.controller');

//  Obtener todas las visitas
/**
 * @swagger
 * /api/v1/visita:
 *  get:
 *    summary: Este metodo muestra todos las visitas
 *    tags: [Visita]
 *    responses:
 *      200:
 *        description: Se muestran todas las visitas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Visita'
 */
router.get('/', visitaController.getVisitasList);

// Nos retorna una visita en especifico
/**
 * @swagger
 * /api/v1/visita/{id}:
 *  get:
 *    summary: Este metodo muestra una visita
 *    tags: [Visita]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra la visita
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Visita'
 *    404:
 *      description: visita no encontrada
 *        
 */
router.get('/:id', visitaController.getVisitaByID);

 // Crear una nueva visita
 /**
  * @swagger
  * components:
  *  schemas:
  *    Visita:
  *      type: object
  *      properties:
  *        id_visitante:
  *          type: int
  *          description: ID del visitante
  *        id_residente:
  *          type: int
  *          description: ID del residente
  *      required:
  *        - id_visitante
  *        - id_residente
  *      example:
  *        id_visitante: 1
  *        id_residente: 1
  * 
  */
 
 /**
  * @swagger
  * /api/v1/visita:
  *  post:
  *    summary: Este metodo crea una visita
  *    tags: [Visita]
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            $ref: '#/components/schemas/Visita'
  *    responses:
  *      200:
  *        description: Nueva visita creada
  */
router.post('/', visitaController.create);

// Nos retorna una visita especifica
/**
 * @swagger
 * /api/v1/visita/{id}:
 *  put:
 *    summary: Este metodo actualiza una visita
 *    tags: [Visita]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Visita'
 *    responses:
 *      200:
 *        description: Se muestra la visita actualizada
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Visita'
 *    404:
 *      description: visita no encontrada
 *        
 */
router.put('/:id', visitaController.update);

// Nos borra una visita
/**
 * @swagger
 * /api/v1/visita/{id}:
 *  delete:
 *    summary: Este metodo borra una visita
 *    tags: [Visita]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Visita borrada correctamente
 *    404:
 *      description: Visita no encontrado
 *        
 */
router.delete('/:id', visitaController.delete);


module.exports = router;