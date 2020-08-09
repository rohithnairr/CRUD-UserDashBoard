const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id: {type:String},
    fname: { type: String },
    lname:{type:String},
    email:{type:String},
    contact:{type:Number},
    address:{type:String},
    country:{type:String}
    
},'emp');

module.exports = { Employee };