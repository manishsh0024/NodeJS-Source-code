const monooose = require("mongoose");

monooose.connect("mongodb://127.0.0.1:27017/olymics" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("Connection Successful with Mongoose");
}).catch((e) =>{
    console.log("No Connection");
});