var dbConn = require('../../config/db.config');

var Vigilant = function (vigilant){
    this.nombre_vigilante = vigilant.nombre_vigilante;
    this.app_vigilante = vigilant.app_vigilante;
    this.apm_vigilante = vigilant.apm_vigilante;
    this.id = vigilant.id;
}

Vigilant.getAllVigilant = (result) =>{
    dbConn.query('SELECT v.id, v.nombre_vigilante, v.app_vigilante, v.apm_vigilante, v.id, t.nombre_turno AS turnos FROM vigilantes AS v INNER JOIN turnos AS t ON t.id = v.id ', (err, res)=>{
        if(err){
            console.log('Error al buscar vigilante', err);
            result(null, err);
        }else{
            console.log('Vigilante recuperada con éxito');
            result(null,res);
        }
    })
}

Vigilant.getAllVigilantById = (id, result) => {
    dbConn.query('SELECT v.id_vigilante, v.nombre_vigilante, v.app_vigilante, v.apm_vigilante, v.id_turno, t.nombre_turno AS turnos FROM vigilantes AS v INNER JOIN turnos AS t ON t.id_turno = v.id_turno WHERE v.id_vigilante = ?', id, (err, res)=>{
        if(err){
            console.log('Error al buscar vigilante por id.', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

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

Vigilant.updateVigilant = (id, vigilantData, result) => {
    dbConn.query("UPDATE vigilantes SET nombre_vigilante=?, app_vigilante=?, apm_vigilante=?, id_turno=? WHERE id_vigilante=?",[vigilantData.nombre_vigilante,vigilantData.app_vigilante,vigilantData.apm_vigilante,vigilantData.id_turno, id], (err, res) => {
        if(err){
            console.log('Error de modificar vigilante');
            result(null, err);
        }else {
            console.log("Vigilante modificado");
            result(null, res);
        }
    });
}

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