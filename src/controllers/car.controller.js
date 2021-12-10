 const CarModel = require('../models/carrro.model');

 exports.getCarList = (req, res) => {
     CarModel.getAllCar((err, car) => {
         console.log('We are here');
         if(err)
         res.send(err);
         console.log('Car', car);
         res.send(car)
     })
 }

 exports.getAllCarById = (req, res) => {
     CarModel.getAllCarById(req.params.id, (err, car) => {
         if(err)
         res.send(err);
         console.log('Single car data',car)
         res.send(car);
     })
 }

 exports.createNewCar = (req, res) => {
     const carData = new CarModel(req.body);
     console.log('carData',carData);
     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success:false, message: 'Plase fill all fields'});
     }else{
         CarModel.createCar(carData, (err, car) => {
             if(err)
             res.send(err);
             res.json({status: true, message: 'Vehiculo agregado correctamente', data: car.insertId})
         })
     }
 }

//  exports.updateCar = function(req, res) {
//      const carData = new CarModel(req.body);
//      console.log('carData update', carData);
//      if(req.body.contructor === Object && Object.keys(req.body).length === 0){
//          res.send(400).send({success:false, message: 'Please fill all fields'});
//      }else{
//          CarModel.updateCar(req.params.id, carData, (err, car) => {
//              if(err)
//              res.send(err);
//              res.json({status: true, message: 'Car updated successfully'})
//          })
//      }
//  }

exports.updateCar = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        CarModel.updateCar(req.params.id, new CarModel(req.body), function(err, casa) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'carro actualizado correctamente' });
        });
    }
  
};



//  exports.updateCar = function(req, res) {
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         CarModel.update(req.params.id, new Car(req.body), function(err, casa) {
//             if (err)
//             res.send(err);
//             res.json({ error:false, message: 'Casa successfully updated' });
//         });
//     }
  
// };

 exports.deleteCar = (req, res) => {
     CarModel.deleteCar(req.params.id, (err, car) => {
         if(err)
         res.send(err);
         res.json({success:true, message: 'Borrado Correctamente'});
     });
 }