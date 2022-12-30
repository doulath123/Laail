const mongoose = require("mongoose");

require("dotenv").config();
 const connect = ()=>{
    const DB=process.env.DB;
    
mongoose.connect(DB,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful')
}).catch((err)=>console.log(err));
 }
module.exports = connect;


// const mongoose=require('mongoose');
// const DB=process.env.DATABASE;
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log('connection successful')
// }).catch((err)=>console.log(err));