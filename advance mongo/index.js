const express = require("express");
const mongoose = require("mongoose");


const app = express();


const connect =()=>{
    return mongoose.connect("mongodb+srv://haider:haider88888@cluster0.apitv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

const schema =mongoose.Schema({

    id:String,
    movie_name:String,
    movie_genre:String,
    production_year:String,
    budget:String,
});

const user=mongoose.model("mockdata",schema);

app.get("/mockdata", async(req,res)=>{
    // .movie.find({"name":"Gladiator"});
   await user.find({}).lean().exec();
    console.log(user)
    return res.send(user)
})

app.listen(9000,async()=>{
    try {
        await connect();
        console.log("Listening to 9000")
        
    } catch (error) {
        console.log("error")
        
    }

})
