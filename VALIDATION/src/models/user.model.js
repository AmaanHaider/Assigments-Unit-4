const mongoose = require("mongoose")

const userSchema = ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    pincode: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },

});

const User = mongoose.model("users",userSchema)
module.exports=User
    