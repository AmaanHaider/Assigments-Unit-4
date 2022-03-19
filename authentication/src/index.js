const express = require("express");

const connect = require ("./config/db")
const userController = require("./controllers/user.controllers")



const app = express();

app.user(express.json());

app.use("/users",userController)

app.post("/register",register)

app.post("/login",login)


app.listen(5200,async()=>{
    try {
        await connect();
        console.log("listening to 5200")
    } catch (error) {
        
    }
})

