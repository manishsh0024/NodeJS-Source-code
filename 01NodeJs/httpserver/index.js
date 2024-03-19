const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    const jsondata = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`,"utf-8")
    const objdata = JSON.parse(jsondata);

    if(req.url=="/about"){
        res.end("This is my about page");
    };
    if(req.url=="/"){
        res.end("HomePage");
    }
    if(req.url=="/contactus"){
        res.end("Contactus");
    }else if(req.url == ("/userapi")){
        // fs.readFile(`${__dirname}/UserAPI/userapi.json`,"utf-8" , (err , data)=>{
        //     if(err){
        //         res.writeHead(404, { "Content-type": "text/html" });
        //         res.end("Error 404 not found");
        //     }else{
        //         console.log(data);
        //         res.end(data);
        //     }
        // });
        res.writeHead(200 , {"content-type":"application/json"});
        res.end(objdata[0].name);
    }else{
        res.writeHead(404 , {"Content-type": "text/html"});
        res.end("<h1>Error 404 not found</h1>");
    }
});

server.listen(8000 , "127.0.0.1" ,()=>{
    console.log("Listen to port no. 8000");
});