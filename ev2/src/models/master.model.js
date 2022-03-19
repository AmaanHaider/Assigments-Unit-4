const mongoose = require("mongoose")

const masterSchema =new mongoose.Schema({

    balance:{type:Number,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true, unique:true},
    
},{
    versionKey:false,
    timestamps:true
})

const Master =  mongoose.model("master",masterSchema)

module.exports= Master