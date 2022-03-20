const express = require("express")
const connect = require("./config/db")
const app = express()
app.use(express.json())




app.userController = require("./controllers/user.controllers")


app.use("/user",userController)


app.listen(7000,async(req,res)=>{

    try {
        
        await connect()
        console.log("i am 7000")

    } catch (error) {
        console.log(error)
    }
})