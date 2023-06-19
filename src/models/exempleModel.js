

//building API by creating models folder and routes folder to handle API endpoints
const { text } = require('express');
const mongoose= require('mongoose');

//define a mongoose model
const exempleSchema = new mongoose.Schema({
    name : {type : String, require : true},
    age : {type : Number, require : true}
});
const symboleSchema = new mongoose.Schema({
    Number : {type : Number, require : true},
    Description : {type : text, require : true},
    finelprice : {type : Number, require : true},
    order : {type : String, require : true},
    
})
//export model;

module.exports = mongoose.model('Exemple', symboleSchema);