const express = require ("express")
const mongoose = require ("mongoose")

const app = express()

const connect = ()=>{
    mongoose.connect ("mongodb+srv://haider:haider88888@cluster0.escm2.mongodb.net/UNIT4?retryWrites=true&w=majority")


}

const userSchema = new mongoose.Schema({

    first_name:{type:String,require:true},
    last_name:{type:String,required:true},
    email:{type:String},
    gender:{type:String,default:"male"},
    ip_adress:{type:Number},
    age:{type:String}

})
