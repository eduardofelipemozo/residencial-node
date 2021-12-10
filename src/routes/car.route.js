 const express = require('express');
 const router = express.Router();

 const carController = require('../controllers/car.controller');

//  Obtener todos los carros
/**
 * @swagger
 * /api/v1/car:
 *  get:
 *    summary: Este metodo muestra todos los vehiculos
 *    tags: [Vehiculo]
 *    responses:
 *      200:
 *        description: Se muestran todos los vehiculos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Vehiculo'
 */
router.get('/', carController.getCarList);

// Nos retorna un vehiculo especifico 
/**
 * @swagger
 * /api/v1/car/{id}:
 *  get:
 *    summary: Este metodo muestra un vehiculo
 *    tags: [Vehiculo]
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
 *              $ref: '#/components/schemas/Vehiculo'
 *    404:
 *      description: vehiculo no encontrado
 *        
 */
router.get('/:id', carController.getAllCarById);


// Crear un nuevo carro
/**
 * @swagger
 * components:
 *  schemas:
 *    Vehiculo:
 *      type: object
 *      properties:
 *        marca_carro:
 *          type: string
 *          description: Marca del carro
 *        modelo_carro:
 *          type: string
 *          description: Modelo del carro
 *        color_carro:
 *          type: string
 *          description: Color del carro
 *        placas_carro:
 *          type: string
 *          decription: Placas del carro
 *        foto_carro:
 *            type: string
 *            description: Foto del carro
 *        observaciones:
 *            type: string
 *            description: Observaciones del carro
 *      required:
 *        - marca_carro
 *        - modelo_carro
 *        - color_carro
 *        - placas_carro
 *        - foto_carro
 *        - observaciones
 *      example:
 *        marca_carro: nissan
 *        modelo_carro: tsuru
 *        color_carro: rojo
 *        placas_carro: k95-89-40
 *        foto_carro: img
 *        observaciones: carro 2015
 * 
 */

/**
 * @swagger
 * /api/v1/car:
 *  post:
 *    summary: Este metodo crea un nuevo vehiculo
 *    tags: [Vehiculo]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Vehiculo'
 *    responses:
 *      200:
 *        description: Nuevo carro creado
 */

router.post('/', carController.createNewCar);

// Nos borra un vehiculo
/**
 * @swagger
 * /api/v1/car/{id}:
 *  delete:
 *    summary: Este metodo borra un vehiculo
 *    tags: [Vehiculo]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: EL id es requerido
 *    responses:
 *      200:
 *        description: Vehiculo borrado correctamente
 *    404:
 *      description: vehiculo no encontrado
 *        
 */

router.delete('/:id', carController.deleteCar);


// Nos retorna un usuario especifico 
/**
 * @swagger
 * /api/v1/car/{id}:
 *  put:
 *    summary: Este metodo actualiza un vehiculo
 *    tags: [Vehiculo]
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
 *            $ref: '#/components/schemas/Vehiculo'
 *    responses:
 *      200:
 *        description: Se muestra el vehiculo actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Vehiculo'
 *    404:
 *      description: vehiculo no encontrado
 *        
 */
router.put('/:id', carController.updateCar);




module.exports = router;
