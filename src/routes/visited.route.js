const express = require('express');
const router = express.Router();

const visitedController = require('../controllers/visited.controller');

//  Obtener todas los visitantes
/**
 * @swagger
 * /api/v1/visited:
 *  get:
 *    summary: Este metodo muestra todos las visitantes
 *    tags: [Visitante]
 *    responses:
 *      200:
 *        description: Se muestran todas los visitantes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Visitantes'
 */

// Get all visited
router.get('/', visitedController.getVisitedList);

// Nos retorna un solo visitante
/**
 * @swagger
 * /api/v1/visited/{id}:
 *  get:
 *    summary: Este metodo muestra un visitante
 *    tags: [Visitante]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra el visitante
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Visitantes'
 *    404:
 *      description: visitante no encontrado
 *        
 */

// Get visited by id 
router.get('/:id', visitedController.getAllVisitedById);

// Crear un nuevo visitante
/**
 * @swagger
 * components:
 *  schemas:
 *    Visitantes:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: Nombre del visitante
 *        appaterno:
 *          type: string
 *          description: Apellido paterno
 *        apmaterno:
 *          type: string
 *          description: Apellido materno
 *        ine:
 *          type: string
 *          description: Ine del visitante
 *        licencia:
 *          type: string
 *          description: Licencia del visitante
 *        imagen:
 *          type: string
 *          description: Imagen
 *        id_vehiculo:
 *          type: int
 *          description: Id del vehiculo
 *      required:
 *        - nombre
 *        - appaterno
 *        - apmaterno
 *        - ine
 *        - licencia
 *        - imagen
 *        - id_vehiculo
 *      example:
 *        nombre: Fabiola
 *        appaterno: Martinez
 *        apmaterno: Florentino
 *        ine: 4512f
 *        licencia: 45781d
 *        imagen: img
 *        id_vehiculo: 1
 */

/**
 * @swagger
 * /api/v1/visited:
 *  post:
 *    summary: Este metodo crea un visitante
 *    tags: [Visitante]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Visitantes'
 *    responses:
 *      200:
 *        description: Nuevo visitante creado
 */


// Create new visited
router.post('/', visitedController.createNewVisited);

// Nos retorna un visitante en especifico
/**
 * @swagger
 * /api/v1/visited/{id}:
 *  put:
 *    summary: Este metodo actualiza un visitante
 *    tags: [Visitante]
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
 *            $ref: '#/components/schemas/Visitantes'
 *    responses:
 *      200:
 *        description: Se muestra el visitante actualizada
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Visitantes'
 *    404:
 *      description: visitante no encontrado
 *        
 */

// Update visited
router.put('/:id', visitedController.updateVisited);

// Nos borra un visitante
/**
 * @swagger
 * /api/v1/visited/{id}:
 *  delete:
 *    summary: Este metodo borra un visitante
 *    tags: [Visitante]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Visitante borrado correctamente
 *    404:
 *      description: Visitante no encontrado
 *        
 */

// Delete visited
router.delete('/:id', visitedController.deleteVisited);

module.exports = router;