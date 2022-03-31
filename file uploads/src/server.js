const  connect = require("./config/db")
const app =  require("./index")

app.listen(6000,async function(){

    try {
        await connect ()
        console.log("listening to 6000")

    } catch (error) {
        console.log(error)
    }
   
})
