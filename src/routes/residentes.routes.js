const express = require('express')
const router = express.Router()
const residentesController = require('../controllers/residentes.controller');

//  Obtener todos los carros
/**
 * @swagger
 * /api/v1/residentes:
 *  get:
 *    summary: Este metodo muestra todos los residentes
 *    tags: [residentes]
 *    responses:
 *      200:
 *        description: Se muestran todos los vehiculos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/residentes'
 */

router.get('/', residentesController.findAll);
// Nos retorna un residente especifico 
/**
 * @swagger
 * /api/v1/residentes/{id}:
 *  get:
 *    summary: Este metodo muestra un vehiculo
 *    tags: [residentes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Se muestra el vehiculo
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/residentes'
 *    404:
 *      description: vehiculo no encontrado
 *        
 */

router.post('/', residentesController.create);
// Nos borra un residente
/**
 * @swagger
 * /api/v1/residentes/{id}:
 *  delete:
 *    summary: Este metodo borra un residente
 *    tags: [residentes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: residentes borrado correctamente
 *    404:
 *      description: residentes no encontrado
 *        
 */


router.get('/:id', residentesController.findById);
// Crear un nuevo residentes
/**
 * @swagger
 * components:
 *  schemas:
 *    residentes:
 *      type: object
 *      properties:
 *        nombre_resi:
 *          type: string
 *          description: nombre del residentes
 *       app_resi:
 *          type: string
 *          description: apellido paterno del residente
 *        apm_resi:
 *          type: string
 *          description: apellido materno del residente
 *        telefono_resi:
 *          type: string
 *          decription: telefono del residente
 *        email_resi:
 *            type: string
 *            description: email del residente
 *        id_casa:
 *            type: string
 *            description: casa del residente
 *      required:
 *        - nombre_resi
 *        - app_resi
 *        - apm_resi
 *        - telefono_resi
 *        - email_resi
 *        - id_casa
 *      example:
 *        nombre_resi: Francisco
 *        app_resi: Rangel
 *        apm_resi: Perez
 *        telefono_resi: 7298765431
 *        email_resi: francisco@gmail.com
 *        id_casa: 1
 * 
 */

/**
 * @swagger
 * /api/v1/residentes:
 *  post:
 *    summary: Este metodo crea un nuevo residentes
 *    tags: [residentes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/residentes'
 *    responses:
 *      200:
 *        description: Nuevo residente creado
 */



router.put('/:id', residentesController.update);


router.delete('/:id', residentesController.delete);
// Nos retorna un usuario especifico 
/**
 * @swagger
 * /api/v1/residentes/{id}:
 *  put:
 *    summary: Este metodo actualiza un vehiculo
 *    tags: [residentes]
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
 *            $ref: '#/components/schemas/residentes'
 *    responses:
 *      200:
 *        description: Se muestra el vehiculo residentes
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/residentes'
 *    404:
 *      description: residentes no encontrado
 *        
 */

module.exports = router