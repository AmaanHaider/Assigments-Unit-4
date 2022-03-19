const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
        timestamps:true,
        version:false,

    })
    userSchema.pre("save",function (next){
        // let hashedPassword = this.password +"secret";
        // this.password = hashedPassword;

        const hash = bcrypt.hashSync(this.password,8);
        this.password= hash; 
        return next();
    })

    const User = mongoose.model("user",userSchema);

    module.exports = User;

