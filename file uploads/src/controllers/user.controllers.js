const express= require("express")

const User = require("../models/user.models")
const router = express.Router();


router.get("",async function(){

    try {
        
          const users = await User.find().lean().exec(); 
          return res.status(200).send(users)
         
    } catch (error) {
        console.log(error)
    }
})
module.exports = router