const express = require('express');
const Model = require('../models/userModel')

const router = express.Router();

router.post('/add', (req, res) => {
    //req.body is the form data provided by client
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getall',(req , res) =>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json();
    });

});

// : denotes url parameter

router.delete('/delete/:id',(req,res) =>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json();
    });


})

router.put('/update/:id', (req, res) => {
    console.log(req.body, req.params.id);
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
      
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/authenticate", (req,res) => {
    
    Model.findOne(req.body)
    .then((result) => {
        console.log(result);
        if(result){
            res.status(200).json(result)
        }else{
            res.status(401).json({message:"invalide credential"})
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getbymail/:email' , (req,res) => {
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.get('/getbyid', (req,res) => {
    Model.findById(req.user._id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    console.log(req.body);
})

module.exports = router;

