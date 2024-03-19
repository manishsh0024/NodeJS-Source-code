const express = require("express");
const router = new express.Router();
const MedicineReport = require("../models/medicine");


//FILL DATA IN SCHEMA
router.post("/medicine" , async(req, res) =>{
    try{
        const createData = new MedicineReport(req.body);
        const SaveData = await createData.save();
        res.send(SaveData);
    }catch(e){console.log(e)}
});


//GET DATA 
router.get("/medicine", async(req, res) =>{
    try{
        const getData = await MedicineReport.find();
        res.send(getData);
    }catch(e){console.log(e)}
});


//GET DATA BY ID
router.get("/medicine/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const getDataBYId = await MedicineReport.findById(id);
        if(!getDataBYId){
            res.status(404).send("<h1>Data Not Found</h1>");
        }
        res.send(getDataBYId);
    }catch(e){console.log(e)}
});

//GET DATA BY NAME
router.get("/medicine/name/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const getDataByName = await MedicineReport.find({ name: name })

        // .select({name:1})     //this method shows only names of documents 
        // .limit(1)  // this method shows only name 1st document in database

        if (getDataByName.length === 0) {
            res.status(404).send("<h1>Data Not Found</h1>");
        }else{
            res.send(getDataByName);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});


//UPDATE DATA BY ID
router.patch("/medicine/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const PatchData = await MedicineReport.findByIdAndUpdate(id ,req.body ,{
            new:true
        });
        if (!PatchData){
            res.status(404).send("<h1>Data Not Found</h1>");
        }else{
            res.send(PatchData);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

//DELETE DATA BY ID
router.delete("/medicine/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const DeleteData = await MedicineReport.findByIdAndDelete(id);
        if (!DeleteData){
            res.status(404).send("<h1>Data Not Found</h1>");
        }else{
            res.send(DeleteData);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});


module.exports = router;