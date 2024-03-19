const fs = require("fs")

const bioData = {
    name:"Manish",
    age:22,
    Cource:'NodeJs'
};

const jsonData = JSON.stringify(bioData);

//create a file with .json and put data of json
// fs.writeFile("json.json",(jsonData),(err)=>{
//     console.log("done");
// })



//read file
fs.readFile("json.json", "utf-8",(err,data)=>{
    console.log(data);
    const objdata = JSON.parse(data);
    console.log(objdata);
})

