const express = require ("express");

const connect = require ("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");
const branchController = require("./controllers/branch.controller");

app.use("/user",userController);
app.use("/branch",branchController);

app.listen(7000,async()=>{
    try {
       await connect()
        console.log("listening to 5800")
        
    } catch (err) {
        console.log(err)
    }
})
