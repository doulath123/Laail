const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id : {type:String},
    name:{type: String},
    mobile : {type: Number},
    

})

module.exports = mongoose.model("users", usersSchema)