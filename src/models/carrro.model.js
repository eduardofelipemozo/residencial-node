 var dbConn = require('../../config/db.config');

 
 var Car = function (car) {
     this.marca_carro = car.marca_carro;
     this.modelo_carro = car.modelo_carro;
     this.color_carro = car.color_carro;
     this.placas_carro = car.placas_carro;
     this.foto_carro = car.foto_carro;
     this.observaciones = car.observaciones;
 }
// CREATE NEW CAR 
Car.createCar = (carData, result) => {
    dbConn.query('INSERT INTO vehiculos SET ? ', carData,(err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Car created successfully');
            result(null, res)
        }
    })
}
//  Get all Car
Car.getAllCar = (result) => {
    dbConn.query('SELECT * FROM vehiculos', (err, res) =>{
        if(err) {
            console.log("Error while fetching car:", err); 
            result(null, err);
        }
        else{
            console.log('Car fetched successfully');
            result(null, res);
        }
    })
}

// GET CAR BY ID FORM DB

Car.getAllCarById = (id, result) => {
    dbConn.query('SELECT * FROM vehiculos WHERE id_vehiculo=?',id, (err, res) =>{
        if(err){
            console.log('Error while fetching car by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
} 



// Car.updateCar = function(id, carData, result){
//     dbConn.query("UPDATE vehiculos SET marca_carro=?, modelo_carro=?, color_carro=?, placas_carro=?, foto_carro=?, observaciones=? WHERE id_vehiculo=?",[carData.marca_carro, carData.modelo_carro, carData.color_carro, carData.placas_carro, carData.foto_carro, carData.observaciones, carData.id_vehiculo, id], (err, res) => {
//         if(err){
//             console.log('Error while updating the car');
//             result(null, err);
//         }else {
//             console.log("Car updated successfully");
//             result(null, res);
//         }
//     });
// }

Car.updateCar = function(id, Car, result){
    dbConn.query("UPDATE vehiculos SET marca_carro=?, modelo_carro=?, color_carro=?, placas_carro=?, foto_carro=?, observaciones=? WHERE id_vehiculo = ?", [Car.marca_carro,Car.modelo_carro,Car.color_carro,Car.placas_carro,Car.foto_carro,Car.observaciones, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };

Car.deleteCar = (id, result) => {
    dbConn.query('DELETE FROM vehiculos WHERE id_vehiculo=?',[id],(err, res) => {
        if(err){
            console.log('Error while deleting the visited');
            result(null, err);
        }else {
            result(null, res);
        }
    })
} 

module.exports = Car;