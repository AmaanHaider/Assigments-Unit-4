const mongoose = express ("mongoose");



module.exports = ()=>{
    return mongoose.connect ("mongodb+srv://haider:haider88888@cluster0.escm2.mongodb.net/UNIT4?retryWrites=true&w=majority")
}