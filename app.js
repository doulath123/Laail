const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT || 8030;

const userController = require("./usersController/userController");

app.use("/", userController);

const ContractsController = require("./ContractsController/ContractsController");

app.use("/", ContractsController);


app.listen(PORT, async()=>{
    
    try{
        console.log(`DB is Connected..! ${PORT}`);
    }catch(err){
        console.log(err);
    }
})
