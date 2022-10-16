// import express 
const express = require('express')

//import mongoose
const mongoose = require('mongoose')

//import  model User
const User = require('./models/user');

const  bodyParser = require('body-parser');
const { addParseSpanInfo } = require('@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics');

//import bcrypt
const bcrypt = require('bcrypt') 

//create instance of express in app
const app = express()

// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//Connect to database
mongoose.connect('mongodb://localhost:27017/meanFev22', { useNewUrlParser: true, useUnifiedTopology: true });

//Integration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create user
app.post("/api/users",(req,res)=>{
    console.log("here in create user",req.body);
    bcrypt.hash(req.body.password,10).then((cryptedpas)=>{
        let user = new User({
            firstName   : req.body.firstName,
            lastName    : req.body.lastName,
            password    : cryptedpas,
            tel         : req.body.tel,
            email       : req.body.email,
            role        : req.body.role,
            speciality  : req.body.speciality,
            experience  : req.body.experience,
            dateofBirth : req.body.dateofBirth
        })
        //sauvgarde
        user.save();
        //send response
        res.status(200).json({
            message : "user created with success"
        })
    })
})
//get all users
app.get("/api/users",(req,res)=>{
    console.log("here in get all users");
    User.find((err,docs)=>{
        if(err){
            console.log("error in DB");
        }else{
            res.status(200).json({
                users : docs
            })
        }
    })
})

//get user by id
app.get("/api/users/:id",(req,res)=>{
    console.log("here in get user by id");
    let id = req.params.id
    User.findOne({_id : id}).then((doc)=>{
        if(doc){
            res.status(200).json({
                user : doc
            })
        }else{
            console.log("error in DB");
        }
    })
})

//delete user
app.delete("/api/users/:id",(req,res)=>{
    console.log("here in delete user");
    let id = req.params.id;
    User.deleteOne({_id : id}).then(
        (result)=>{
            if(result){
                res.status(200).json({
                    message : "User deleted with success"
                })
            }
        }
    )
})

//update user 
app.put("/api/users/:id",(req,res)=>{
    let id = req.params.id;
    let user = {
        _id         : req.body._id,
        firstName   : req.body.firstName,
        lastName    : req.body.lastName,
        password    : req.body.password,
        tel         : req.body.tel,
        email       : req.body.email,
        role        : req.body.role,
        speciality  : req.body.speciality,
        experience  : req.body.experience,
        dateofBirth : req.body.dateofBirth
    }
    console.log("updated user",user);
    User.updateOne({_id : req.params.id},user).then(
        (result)=>{
            res.status(200).json({
                message : "User updated with success"
            })
        }
    )
})
//export app (dima ekhir ligne fil fichier)
module.exports = app;