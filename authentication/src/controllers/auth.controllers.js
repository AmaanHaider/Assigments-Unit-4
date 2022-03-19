
const User = require ("../models/user.models")

const register = (req,res)=>{
    try {
        const user = await User.findOne({emai:req.body.email})

        if(user){
            return res.status(400).send({message: "Email already exits"})
        }

        user = await User.create(req.body)
        return res.status(200).send(user)
        
    } catch (err) {
        res.status(400).send({message:err.message})
    }
}

const login = (req,res)=>{
    try {
        return res.status(200).send("login")
    } catch (err) {
        res.status(400).send({message:err.message})
    }
}


model  export = register