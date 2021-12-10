var dbConn = require('../../config/db.config');

var Vigilant = function (vigilant){
    this.nombre_vigilante = vigilant.nombre_vigilante;
    this.app_vigilante = vigilant.app_vigilante;
    this.apm_vigilante = vigilant.apm_vigilante;
    this.id = vigilant.id;
}

// Ya checa todos los registros
Vigilant.getAllVigilant = (result) => {
    dbConn.query('SELECT * FROM vigilantes', (err, res) =>{
        if(err) {
            console.log("Error al buscar vigilante", err); 
            result(null, err);
        }
        else{
            console.log('Vigilante recuperado con éxito');
            result(null, res);
        }
    })
}
// ya busca por id
Vigilant.getAllVigilantById = (id, result) => {
    dbConn.query('SELECT * FROM vigilantes WHERE id=?',id, (err, res) =>{
        if(err){
            console.log('Error al buscar vigilante por id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
} 

// crea pero no jala el id_turno
Vigilant.createVigilant = (vigilantData, result) =>{
    dbConn.query('INSERT INTO vigilantes SET ?',vigilantData,(err, res) => {
        if(err){
            console.log('Error de insertar vigilante');
            result(null, err);
        }else{
            console.log('Vigilante creado');
            result(null, res)
        }
    })
}


//modifica correcta
Vigilant.updateVigilant = function(id, vigilant, result){
    dbConn.query("UPDATE vigilantes SET nombre_vigilante=?, app_vigilante=?, apm_vigilante=?, id_turno=? WHERE id = ?", [vigilant.nombre_vigilante,vigilant.app_vigilante,vigilant.apm_vigilante,vigilant.id, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };

// Ya elimina
Vigilant.deleteVigilant = (id, result) => {
    dbConn.query('DELETE FROM vigilantes WHERE id =?',[id],(err, res) => {
        if(err){
            console.log('Error al eliminar vigilante');
            result(null, err);
        }else {
            result(null, res);
        }
    })
}

module.exports = Vigilant;