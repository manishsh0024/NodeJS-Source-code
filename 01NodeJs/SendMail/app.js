const express = require("express");

const app = express();

const SendMail = require("./Controller/Sendemail");

app.get("/" , (req , res)=>{
    res.send("im server");
});



app.get("/sendemail" , SendMail)

const PORT = 8000;

const start = async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`live at ${PORT}`)
        })
    }catch(error){}
}

start();
