const express = require("express");
require("./db/conn");
const Router = require("./router/RoutingMethod");


const app = express();
const PORT = process.env.PORT || 8000 ;


app.use(express.json());
app.use(Router);


app.listen(PORT , () =>{
    console.log("Connection Successful...");
    console.log(`Listen on port no. ${PORT}`);
})