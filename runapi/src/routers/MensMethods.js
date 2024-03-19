const express = require("express");
const MensRanking = require("../models/mens");
const router = new express.Router();

router.post("/mens", async(req, res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.send(insertMens);
    }catch(e){
        console.log(e);
    }
});

router.get("/mens" , async(req,res) =>{
    try{
        const getData =  await MensRanking.find();
        res.send(getData);
    }catch(e){
        console.log(e);
    }
});

router.get("/mens/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
        const menID = await MensRanking.findById(_id);
        if(menID){
            res.send(menID);
        }else{
            res.send("<h1>ID not Found</h1>");
        }
    }catch(e){
        console.log(e);
    }
});

router.delete("/mens/:id", async(req,res) =>{
    try{
        const id = req.params.id;
        const deleteData = await MensRanking.findByIdAndDelete(id);
        if(!deleteData){
            res.send("<h1>ID not found</h1>")
        }
        res.send(deleteData);
    }catch(e){
        console.log(e)
    }
});

router.patch("/mens/:id", async(req,res) =>{
    try{
        const id = req.params.id;
        const patchData = await MensRanking.findByIdAndUpdate(id, req.body , {
            new:true
        });
        if(!patchData){
        res.send("<h1>Data Not Found</h1>")
    }
    res.send(patchData);
    }catch(e){
        console.log(e);
    }
});

module.exports = router;