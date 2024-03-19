const express = require("express");
const app = express();
const fs = require("fs");



app.get("/" , (req,res) => {
    res.send("<h1>Welcome to HomePage</h1>"); //add html elements
    // res.write("jhdsjv");
    // res.write("sdg");
    // res.send();
});

app.get("/about" , (req,res) => {
//     res.send([
//         {
//         id:1,
//         name:"Manish",
//     },
//     {
//         id:1,
//         name:"Manish",
//     }
// ]);
res.json([ //conver null and undefined data in json data
    {
    id:1,
    name:"Manish",
},
{
    id:1,
    name:"Manish",
}
]);
});

app.get("/contact" , (req,res) => {
    res.json("ContactPage");

});

app.get("/temper" , (req,res) => {
    res.send("Welcome to tempPage");
});




const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`connected with Port no. ${PORT}`);
});