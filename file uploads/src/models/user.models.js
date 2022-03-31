const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String,reuqired:true},
    last_name: { type: String,reuqired:false},
    email: { type: String,reuqired:true},
    password:{type:Number,reuqired:true},
    age: { type: Number,reuqired:true},
})

module.exports= mongoose.model("user",userSchema);