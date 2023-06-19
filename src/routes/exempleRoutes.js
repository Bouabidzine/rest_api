const express= require('express');
const router = express.Router();
const Exemple = require('../models/exempleModel');

//Get Exemple 

router.get('/exemples', async (req , res)=>{
    try {
        const exemples = await Exemple.find();
        res.json(exemples)
    } catch (err) {
       res.status(500).json({ message : err.message});

    }
   
});

//Post exemple;
 router.post('/exemples', async (req, res)=>{
    const exemples = new Exemple({
        name : req.body.name ,
        age : req.body.age,
    });
    try {
        const newExemple = await exemples.save();
        res.status(201).json(newExemple);}
        catch (err) {res.status(400).json({ message : err.message});
        
    }
 });
 module.exports = router;