const fs = require("fs");

//Synchronous way 


//fs.writeFileSync("text.txt", "Add data in this file");

// fs.appendFileSync("text.txt","Append data in this file");

//-----------------------------------------------------------------------

// const readdata = fs.readFileSync("text.txt");  // Method - 1
// console.log(readdata.toString());


// const readdata = fs.readFileSync("text.txt","utf-8");  // Method - 2
// console.log(readdata);


//-----------------------------------------------------------------------

// fs.unlinkSync("text.txt");

//-----------------------------------------------------------------------

//Synchronous way 

// fs.writeFile("text.txt","Add data in this file",(err)=>{
//     console.log("File is created");
// });

// fs.appendFile("text.txt","Append data in this file",(err)=>{
//     console.log("Data is added");
// });

//-----------------------------------------------------------------------
fs.rename("text.txt","input.txt",(err)=>{
    console.log("File renamed");
});

//-----------------------------------------------------------------------

