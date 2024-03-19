const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

// create new student

// router.post("/students" ,(req , res) => {
//     console.log(req.body);
//     const User = new Student(req.body);
//     User.save().then(() => {
//         res.status(201).send(User);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })


//do with Async Await function
router.post("/students" , async(req , res) =>{
    try{
        const User = new Student(req.body);
        const createUser = await User.save();
        res.status(201).send(createUser);
    }catch(err){res.status(400).send(err)}
})


//read data from students Registration
router.get("/students", async(req , res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){console.log(err)}
})


//Get the student data using id
router.get("/students/:id" , async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentid =  await Student.findById({_id});
        res.send(studentid);
    }catch(err){
        console.log(err);
    }
})


//Delete students data
router.delete("/students/:id", async(req,res) => {
    try{
        const id = req.params.id;
        const deletedata = await Student.findByIdAndDelete(id);
        if(!id){
            return res.status(400).send();
        }
        res.send(deletedata);
    }catch(e){
        res.status(500).send(e);
    }
})


//UPDATE STUDENTS BY IT'S ID
router.patch("/students/:id", async(req ,res) =>{
    try{
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateData);
    }catch(e){
        return res.status(404).send(e)
    }
})


module.exports = router;