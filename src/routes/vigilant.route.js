 const express = require('express');
 const router = express.Router();
 const vigilantController = require('../controllers/vigilant.controller');

 /**
 * @swagger
 * /api/v1/vigilant:
 *  get:
 *    summary: Este metodo muestra todos los Vigilantes
 *    tags: [Vigilante]
 *    responses:
 *      200:
 *        description: Se muestran todos los Vigilantes  
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Vigilante'
 */

 router.get('/',vigilantController.getVigilantist);
// Nos retorna un residente especifico 
/**
 * @swagger
 * /api/v1/vigilant/{id}:
 *  get:
 *    summary: Este metodo muestra un vigilante
 *    tags: [Vigilante]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra el vigilante
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Vigilante'
 *    404:
 *      description: Vigilante no encontrado
 *        
 */

 router.get('/:id',vigilantController.getAllVigilantById);

 // Crear un nuevo vigilante
/**
 * @swagger
 * components:
 *  schemas:
 *    Turno:
 *      type: object
 *      properties:
 *        nombre_vigilante:
 *          type: string
 *          description: Nombre del vigilante
 *        app_vigilante:
 *          type: string
 *          description: Apellido paterno
 *        apm_vigilante:
 *          type: string
 *          description: Apellido materno
 *        id_turno:
 *          type: int
 *          description: ID del turno
 *      required:
 *        - nombre_vigilante
 *        - app_vigilante
 *        - apm_vigilante
 *        - id_turno
 *      example:
 *        nombre_vigilante: Jessica
 *        app_vigilante: Galicia
 *        apm_vigilante: De Jesus
 *        id_turno: 1
 * 
 */

/**
 * @swagger
 * /api/v1/vigilant:
 *  post:
 *    summary: Crea un nuevo vigilante
 *    tags: [Vigilante]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Vigilante'
 *    responses:
 *      200:
 *        description: Nuevo vigilante
 */

 router.post('/',vigilantController.createNewVigilant);

 // Nos retorna un vigilante especifico 
/**
 * @swagger
 * /api/v1/vigilant/{id}:
 *  put:
 *    summary: Este metodo actualiza un vigilante
 *    tags: [Vigilante]
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
 *            $ref: '#/components/schemas/Vigilante'
 *    responses:
 *      200:
 *        description: Se muestra el  Vigilante
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Vigilante'
 *    404:
 *      description: Vigilante no encontrado
 *        
 */
 
 router.put('/:id',vigilantController.updateVigilant);

 // Nos borra un vigilante
/**
 * @swagger
 * /api/v1/vigilant/{id}:
 *  delete:
 *    summary: Este metodo borra un vigilante
 *    tags: [Vigilante]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Vigilante borrado correctamente
 *    404:
 *      description: Vigilante no encontrado
 *        
 */

 router.delete('/:id',vigilantController.deleteVigilant);

 module.exports = router;