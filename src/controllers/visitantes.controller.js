const VisitantesModel = require('../models/visited.model');

exports.getVisitantesList = (req, res)=> {
    VisitantesModel.getAllVisitantesd((err, visitantes) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Visitantes', visitantes);
        res.send(visitantes)
    })
}


exports.getAllVisitantesById = (req, res) =>{
    
    VisitantesModel.getAllVisitantesdById(req.params.id, (err, visitantes) =>{
        if(err)
        res.send(err);
        console.log('Single visited data',visitantes)
        res.send(visitantes);
    })
}
 
exports.createNewVisitantes = (req, res) =>{
    const visitantesData = new VisitantesModel(req.body);
    console.log('visitantesData',visitantesData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VisitantesModel.createVisitantes(visitantesData, (err, visitantes) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Visitantes Created Successfully', data: visitantes.insertId})
        })
    }
}



exports.updateVisitantes = (req, res) => {
    const visitantesData = new VisitantesModel(req.body);
    console.log('visitantesData update',visitantesData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VisitantesModel.updateVisitantes(req.params.id, visitantesData, (err, visitantes) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Visited Updated Successfully'})
        })
    }
}


exports.deleteVisitantes = (req, res) => {
    VisitantesModel.deleteVisitantes(req.params.id, (err, visitantes) => {
        if(err)
        res.send(err);
        res.json({success:true, message: 'Visited deleted successfully'});
    });
}