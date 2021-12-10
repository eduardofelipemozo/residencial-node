'user strict';
var dbConn = require('./../../config/db.config');

var Residente = function(residente){
    this.nombre_resi     = residente.nombre;
    this.app_resi      = residente.app;
    this.apm_resi          = residente.apm;
    this.telefono_resi     = residente.telefono;
    this.email_resi = residente.email;
    this.casa_id = residente.casa_id;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
};


Residente.create = function (newResidente, result) {    
    dbConn.query("INSERT INTO residentes set ?", newResidente, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};


Residente.findById = function (id, result) {
    dbConn.query("Select * from residentes where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Residente.findAll = function (result) {
    dbConn.query("Select * from residentes", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('residentes : ', res);  
            result(null, res);
        }
    });   
};

Residente.update = function(id, residentes, result){
    dbConn.query("UPDATE residentes SET nombre=?,app=?,apm=?,telefono=?,email=?,casa_id=? WHERE id = ?", [residentes.nombre_resi,residentes.app_resi,residentes.apm_resi,residentes.telefono_resi,residentes.email_resi,residentes.casa_id ,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };

  Residente.delete = function(id, result){
    dbConn.query("DELETE FROM residentes WHERE id = ?", [id], function (err, res) {
       if(err) {
           console.log("error: ", err);
           result(null, err);
       }
       else{
           result(null, res);
       }
   }); 
};

module.exports= Residente;