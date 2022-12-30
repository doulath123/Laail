const express = require("express");
const router = express.Router();
const Users = require("../model/ContractsSchema");
router.post("/contract", async(req, res) => {
    try{
        const user = await Contracts.create(req.body);
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/contract", async(req, res) => {
    try{
        const user = await Contracts.find().lean().exec();
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/contract/:id", async(req, res)=>{
    try{
        const user = await Contracts.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/contract/:id", async(req, res)=>{
    try{
        const user = await Contracts.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;