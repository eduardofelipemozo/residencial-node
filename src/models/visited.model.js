var dbConn = require('../../config/db.config');

var Visited = function (visited){
    this.nombre = visited.nombre;
    this.appaterno = visited.appaterno;
    this.apmaterno = visited.apmaterno;
    this.ine = visited.ine;
    this.licencia = visited.licencia;
    this.imagen = visited.imagen;
    this.id_vehiculo = visited.id_vehiculo;
}

// Get all visited
Visited.getAllVisited = (result) =>{
    dbConn.query('SELECT t.id_visitante, t.nombre, t.appaterno, t.apmaterno, t.ine, t.licencia, t.imagen, t.id_vehiculo, v.marca AS vehiculo FROM visitantes AS t INNER JOIN vehiculos AS v ON v.id_vehiculo = t.id_vehiculo', (err, res)=>{
        if(err){
            console.log('Error while fetching visited', err);
            result(null, err);
        }else{
            console.log('Visited fetched succesfully');
            result(null,res);
        }
    })
}

// Get visited  by id from BD
Visited.getAllVisitedById = (id, result) => {
    dbConn.query('SELECT t.id_visitante, t.nombre, t.appaterno, t.apmaterno, t.ine, t.licencia, t.imagen, t.id_vehiculo, v.marca AS vehiculo FROM visitantes AS t INNER JOIN vehiculos AS v ON v.id_vehiculo = t.id_vehiculo WHERE id_visitante=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching visited by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
// create new visited
Visited.createVisited = (visitedData, result) =>{
    dbConn.query('INSERT INTO visitantes SET ?',visitedData,(err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Visited created successfully');
            result(null, res)
        }
    })
}


// Update Visited
Visited.updateVisited = (id, visitedData, result) => {
    dbConn.query("UPDATE visitantes SET nombre=?, appaterno=?, apmaterno=?, ine=?, licencia=?, imagen=?, id_vehiculo=? WHERE id_visitante=?",[visitedData.nombre,visitedData.appaterno,visitedData.apmaterno,visitedData.ine,visitedData.licencia,visitedData.imagen,visitedData.id_vehiculo, id], (err, res) => {
        if(err){
            console.log('Error While updating the visited');
            result(null, err);
        }else {
            console.log("Visited Updated successfully");
            result(null, res);
        }
    });
}

// Delete visited
Visited.deleteVisited = (id, result) => {
    dbConn.query('DELETE FROM visitantes WHERE id_visitante=?',[id],(err, res) => {
        if(err){
            console.log('Error while deleting the visited');
            result(null, err);
        }else {
            result(null, res);
        }
    })


    // dbConn.query("UPDATE visitantes SET is_deleted=? WHERE id_visitante=?",[1, id], (err, res) => {
    //     if(err){
    //         console.log('Error While deleting the visited');
    //         result(null, err);
    //     }else {
    //         console.log("Visited deleted successfully");
    //         result(null, res);
    //     }
    // });
}
module.exports = Visited;