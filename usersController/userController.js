const express = require("express");
const router = express.Router();
const Users = require("../model/usersSchema");
router.post("/user", async(req, res) => {
    try{
        const user = await Users.create(req.body);
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/user", async(req, res) => {
    try{
        const user = await Users.find().lean().exec();
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/user/:id", async(req, res)=>{
    try{
        const user = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/user/:id", async(req, res)=>{
    try{
        const user = await Users.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;