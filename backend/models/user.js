//import mongoose
const mongoose = require('mongoose')

//generate Schema
const userSchema = mongoose.Schema({
    firstName : String,
    lastName  : String,
    email     : String,
    password  : String,
    tel       : String,
    role      : String,
    speciality  : String,
    experience  : String,
    dateofBirth : String,
})
//generate model 
const user = mongoose.model('User',userSchema);
//export model 
module.exports = user;