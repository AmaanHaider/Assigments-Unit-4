


const express= require("express");




const app= express();

app.get("/home", function(req, res){
    res.send("hello")
});

app.get("/books", function(req, res){
    res.send({book1:"I am first book", book2:"I am second book",book3:"I am third book", book4:"I am fourth book"})
});
app.listen(5000,()=>{
    console.log("Listening to path 5000")
});