const http = require("http");

const server = http.createServer((req , res)=>{
    if(req.url=="/"){
        res.end("Home");
    }
    if(req.url == "/about"){
        res.end("About Page");
    }
});

const PORT = 8000;
server.listen(PORT , ()=>{
    console.log(`Server is Live at ${PORT}`)
})