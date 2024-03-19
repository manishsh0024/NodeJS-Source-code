const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request" , (req , res)=>{

    //This is an old method
    // fs.readFile("input.txt",(err , data)=>{  
    //     return err ? console.log(err) :res.end(data.toString());
    // });

    //This is Stream Method
    //Create Readable Stream
    const rstream = fs.createReadStream("input.txt");
    rstream.on("data",(chukdata)=>{
        res.write(chukdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",(err)=>{ // if file is not exist
        console.log(err);
        res.end("File not found ");
    });
});

const PORT = 8000;
server.listen(PORT , (req , res)=>{
    console.log(`Server is running on port :${PORT} `)
})