const express = require('express')
const router = express.Router()
const casaController = require('../controllers/casa.controller');


/**
 * @swagger
 * /api/v1/casa:
 *  get:
 *    summary: Este metodo muestra todos las Casas
 *    tags: [Casa]
 *    responses:
 *      200:
 *        description: Se muestran todas las Casas 
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Casa'
 */

router.get('/', casaController.findAll);
// Nos retorna una casa especifico 
/**
 * @swagger
 * /api/v1/casa/{id}:
 *  get:
 *    summary: Este metodo muestra una casa por id
 *    tags: [Casa]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra la casas 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Casa'
 *    404:
 *      description: casa no encontrado
 *        
 */

router.get('/:id', casaController.findById);
// Crear un nueva casa 
/**
 * @swagger
 * components:
 *  schemas:
 *    Casa:
 *      type: object
 *      properties:
 *        num_casa:
 *          type: string
 *          description: Numero de casa 
 *        direccion_casa:
 *          type: string
 *          description: Descripcion de la casa
 *        color_casa:
 *          type: string
 *          description: Color de la casa
 *        referencia_casa:
 *          type: string
 *          decription: Referencia  de la casa
 *      required:
 *        - num_casa
 *        - direccion_casa
 *        - color_casa
 *        - referencia_casa
 *      example:
 *        num_casa: 110
 *        direccion_casa: av lerma
 *        color_casa: roja
 *        referencia_casa: frente a una penaderia 
 * 
 */

/**
 * @swagger
 * /api/v1/casa:
 *  post:
 *    summary: Este metodo crear una nueva casa
 *    tags: [Casa]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Casa'
 *    responses:
 *      200:
 *        description: Nuevo carro creado
 */
router.post('/', casaController.create);

/**
 * @swagger
 * /api/v1/casa/{id}:
 *  delete:
 *    summary: Este metodo borra una casa
 *    tags: [Casa]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Casa borrado correctamente
 *    404:
 *      description: Casa no encontrado
 *        
 */


router.put('/:id', casaController.update);
 
/**
 * @swagger
 * /api/v1/casa/{id}:
 *  put:
 *    summary: Este metodo actualiza una casa 
 *    tags: [Casa]
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
 *            $ref: '#/components/schemas/Casa'
 *    responses:
 *      200:
 *        description: Se muestra la casa actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Casa'
 *    404:
 *      description: casa no encontrado
 *        
 */
router.delete('/:id', casaController.delete);

module.exports = router