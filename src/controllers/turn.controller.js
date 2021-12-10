 const TurnModel = require ('../models/turn.model');

 exports.getTurnList = (req, res) => {
     TurnModel.getAllTurn((err, turn) => {
         console.log('We are here');
         if(err)
         res.send(err);
         console.log('turn', turn);
         res.send(turn)
     })
 }

 exports.getAllTurnById = (req, res) =>{
      TurnModel.getAllTurnById(req.params.id, (err, turn) => {
          if(err)
          res.send(err);
          console.log('Single turn data', turn)
          res.send(turn);
      })
 }

 exports.createNewTurn = (req, res) => {
     const turnData = new TurnModel(req.body);
     console.log('turnData', turnData);
     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success:false, message: 'Please fill all fields'});
     }else{
         TurnModel.createTurn(turnData, (err, turn) => {
             if(err)
             res.send(err);
             res.json({status: true, message: 'Turn created successfully', data: turn.insertId})
         })
     }
 } 


 exports.updateTurn = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        TurnModel.updateTurn(req.params.id, new TurnModel(req.body), function(err, turn) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Turn updated successfully' });
        });
    }
  
};

 exports.deleteTurn = (req, res) => {
     TurnModel.deleteTurn(req.params.id, (err, turn) => {
         if(err)
         res.send(err);
         res.json({success:true, message: 'Visited deleted successfully'});
     });
 }


 