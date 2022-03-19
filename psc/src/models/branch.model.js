const mongoose = require("mongoose");


const branchSchema = new mongoose.Schema({
    name:{type:String,required:true},
    
},{
    versionKey:false,
    timestamps:true,
});

const Branch =mongoose.model("branch",branchSchema)

module.exports=Branch;
