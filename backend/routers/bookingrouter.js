const express = require('express');
const Model = require('../models/bookingModel')

const router = express.Router();

router.post('/add', (req, res) => {
    //req.body is the form data provided by client
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json();
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


module.exports = router;