const VisitedModel = require('../models/visited.model');

exports.getVisitedList = (req, res)=> {
   
    VisitedModel.getAllVisited((err, visited) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Visited', visited);
        res.send(visited)
    })
}


exports.getAllVisitedById = (req, res) =>{
    
    VisitedModel.getAllVisitedById(req.params.id, (err, visited) =>{
        if(err)
        res.send(err);
        console.log('Single visited data',visited)
        res.send(visited);
    })
}


exports.createNewVisited = (req, res) =>{
    const visitedData = new VisitedModel(req.body);
    console.log('visitedData',visitedData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VisitedModel.createVisited(visitedData, (err, visited) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Visited Created Successfully', data: visited.insertId});
        });
    }
}



exports.updateVisited = (req, res) => {
    const visitedData = new VisitedModel(req.body);
    console.log('visitedData update',visitedData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VisitedModel.updateVisited(req.params.id, visitedData, (err, visited) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Visited Updated Successfully'});
        });
    }
}


exports.deleteVisited = (req, res) => {
    VisitedModel.deleteVisited(req.params.id, (err, visited) => {
        if(err)
        res.send(err);
        res.json({success:true, message: 'Visited deleted successfully'});
    });
}

