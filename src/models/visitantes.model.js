var dbConn = require('../../config/db.config');

var Visitantes = function (visitantes){
    this.nombre = visitantes.nombre;
    this.appaterno = visitantes.appaterno;
    this.apmaterno = visitantes.apmaterno;
    this.ine = visitantes.ine;
    this.licencia = visitantes.licencia;
    this.imagen = visitantes.imagen;
    this.id_vehiculo = visitantes.id_vehiculo;
}


Visitantes.getAllVisitantes = (result) =>{
    dbConn.query('SELECT t.id_visitante, t.nombre, t.appaterno, t.apmaterno, t.ine, t.licencia, t.imagen, t.id_vehiculo, v.marca AS vehiculo FROM visitantes AS t INNER JOIN vehiculos AS v ON v.id_vehiculo = t.id_vehiculo', (err, res)=>{
        if(err){
            console.log('Error al recuperar las visitantes ', err);
            result(null, err);
        }else{
            console.log('Visitante obtenido con éxito ');
            result(null,res);
        }
    })
}


Visitantes.getAllVisitantesById = (id, result) => {
    dbConn.query('SELECT t.id_visitante, t.nombre, t.appaterno, t.apmaterno, t.ine, t.licencia, t.imagen, t.id_vehiculo, v.marca AS vehiculo FROM visitantes AS t INNER JOIN vehiculos AS v ON v.id_vehiculo = t.id_vehiculo WHERE id_visitante=?', id, (err, res)=>{
        if(err){
            console.log('Error al recuperar las visitantes  by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

Visitantes.createVisitantes = (visitantesData, result) =>{
    dbConn.query('INSERT INTO visitantes SET ?',visitantesData,(err, res) => {
        if(err){
            console.log('Error al insertar datos ');
            result(null, err);
        }else{
            console.log('Visitante creado con éxito ');
            result(null, res)
        }
    })
}


Visitantes.updateVisitantes = (id, visitantesData, result) => {
    dbConn.query("UPDATE visitantes SET nombre=?, appaterno=?, apmaterno=?, ine=?, licencia=?, imagen=?, id_vehiculo=? WHERE id_visitante=?",[visitedData.nombre,visitedData.appaterno,visitedData.apmaterno,visitedData.ine,visitedData.licencia,visitedData.imagen,visitedData.id_vehiculo, id], (err, res) => {
        if(err){
            console.log('Error al actualizar el visitante');
            result(null, err);
        }else {
            console.log("Visitante actualizado correctamente ");
            result(null, res);
        }
    });
}


Visitantes.deleteVisitantes = (id, result) => {
    dbConn.query('DELETE FROM visitantes WHERE id_visitante=?',[id],(err, res) => {
        if(err){
            console.log('Error al eliminar el visitante');
            result(null, err);
        }else {
            result(null, res);
        }
    })
}

module.exports = Visitantes;