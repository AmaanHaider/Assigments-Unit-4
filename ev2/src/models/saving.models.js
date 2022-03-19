const mongoose = require("mongoose")

const savingSchema = new mongoose.Schema({

    accountNumber:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    startDate:{type:String,required:true},
    maturityDate:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true,
})

const Saving = mongoose.model("saving",savingSchema)

module.exports=Saving

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// startDate ( required )
// maturityDate (required 