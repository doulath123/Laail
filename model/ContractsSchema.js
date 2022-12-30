const mongoose = require("mongoose");
const ContractsSchema = new mongoose.Schema({
    id : {type:String, required:true},
    LenderId:{type:String, required:true},
    BorrowerId:{type:String, required:true},
    Principle:{type:String, required:true},
    Interest:{type:Number, required:true},
    LoanStartDate:{type:String, required:true},
    LoanDueDate:{type:String, required:true},
    IsRepaid:{type:String, required:true}
})

module.exports = mongoose.model("Contracts", ContractsSchema)