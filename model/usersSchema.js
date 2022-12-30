const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id : {type:String, required:true},
    name:{type: String, required:true},
    mobile : {type: Number, required:true},
    

})

module.exports = mongoose.model("Users", usersSchema)