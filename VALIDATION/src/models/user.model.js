const express = require("express")
const mongoose = require("mongoose")

const userSchema = ({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    pincode: { type: String, require: true },
    age: { type: String, require: true },
    gender: { type: String, require: true },

});

const User = mongoose.model("users",userSchema)
module.exports=User
    