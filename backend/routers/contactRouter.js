const express = require('express');
const Model = require('../models/contactModel')

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


module.exports = router;

