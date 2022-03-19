const express = require("express")

const app = express()
app.use(express.json())


const connect = require("./config/db")



const  userController = require("./controllers/user.controller")
const  branchController = require("./controllers/branch.controller")
const  masterController = require("./controllers/master.controller")




app.use("/user",userController)
app.use("/branch",branchController)
app.use("/master",masterController)




app.listen(8000,async()=>{

    try {
        await connect()
        console.log("i am 8000")
    } catch (error) {
        console.log(error)
    }
})
