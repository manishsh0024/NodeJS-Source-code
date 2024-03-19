const fs = require("fs");


// 1. - create A read.txt file with Asynchronous
fs.writeFile("read.txt","tutorial to add data" , (err)=>{
    console.log("Task Completed");
    console.log(err);
});



// 2. - Add more data without overwrite exist data in read.txt file with Asynchronous
fs.appendFile("read.txt","Appended data in this file",()=>{
    console.log("task completed")
});



// 3. - Read data in read.txt file with Asynchronous  and Encoding with UTF-8 
fs.readFile("read.txt","UTF-8",(err , data)=>{
    console.log("task completed");
    console.log(data);
});


// 4. - Rename read.txt file with Asynchronous
fs.rename("read.txt","write.txt",(err)=>{
    console.log(err);
    console.log("Task Completed");
});