const express = require("express");
const mongoose = require("mongoose");


const app = express();


const connect =()=>{
    return mongoose.connect("mongodb+srv://haider:haider88888@cluster0.apitv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

const schema =mongoose.schema({

    id:String,
    movie_name:String,
    movie_name:String,
    production_year:String,
    budget:String,
});

const user=mongoose.model("mockdata",schema);

app.get("/mockdata", async(req,res)=>{


})

app.listen(9000,async()=>{
    try {
        await connect();
        console.log("moj 9000")
        
    } catch (error) {
        console.log("error")
        
    }

})
