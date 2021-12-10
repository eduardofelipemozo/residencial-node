const express = require('express');
 const router = express.Router();

 const turnController = require('../controllers/turn.controller');

//  Obtener todos los turnos
/**
 * @swagger
 * /api/v1/turn:
 *  get:
 *    summary: Este metodo muestra todos los turnos
 *    tags: [Turno]
 *    responses:
 *      200:
 *        description: Se muestran todos los turnos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Turno'
 */
 router.get('/', turnController.getTurnList);

 // Nos retorna un turno especifico
/**
 * @swagger
 * /api/v1/turn/{id}:
 *  get:
 *    summary: Este metodo muestra un turno
 *    tags: [Turno]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra el turno
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Turno'
 *    404:
 *      description: Turno no encontrado
 *        
 */
 router.get('/:id', turnController.getAllTurnById);

// Crear un nuevo turno
/**
 * @swagger
 * components:
 *  schemas:
 *    Turno:
 *      type: object
 *      properties:
 *        nombre_turno:
 *          type: string
 *          description: Nombre o tipo del turno
 *        estatus_turno:
 *          type: string
 *          description: Estado del turno(activo o inactivo)
 *      required:
 *        - nombre_turno
 *        - estatus_turno
 *      example:
 *        nombre_turno: Matutino
 *        estatus_turno: Activo
 * 
 */

/**
 * @swagger
 * /api/v1/turn:
 *  post:
 *    summary: Este metodo crea un nuevo turno
 *    tags: [Turno]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Turno'
 *    responses:
 *      200:
 *        description: Nuevo turno creado
 */
 router.post('/', turnController.createNewTurn);


 // Nos retorna un turno especifico 
/**
 * @swagger
 * /api/v1/turn/{id}:
 *  put:
 *    summary: Este metodo actualiza un turno
 *    tags: [Turno]
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
 *            $ref: '#/components/schemas/Turno'
 *    responses:
 *      200:
 *        description: Se muestra el turno actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Turno'
 *    404:
 *      description: Turno no encontrado
 *        
 */
 router.put('/:id', turnController.updateTurn);

 // Nos borra un turno
/**
 * @swagger
 * /api/v1/turn/{id}:
 *  delete:
 *    summary: Este metodo borra un turno
 *    tags: [Turno]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Turno borrado correctamente
 *    404:
 *      description: Turno no encontrado.
 *        
 */
 router.delete('/:id', turnController.deleteTurn);
 

 module.exports = router;