const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newdata",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Connection Successfull..."))
.catch((err) => console.log(err));

const dataSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    importance : String,
    date : {
        type : Date,
        default : Date.now
    }
})  

//Create folder in newdata
const nodedata = new mongoose.model("Nodedata",dataSchema);


//Create Document
const createDocument = async () =>{
    try{
        const htmldata = new nodedata({
            name:"HTML",
            ctype : "WEB DEVELOPMENT",
            videos: 20,
            author: "Manish Sharma",
            active : true,
            importance : "Very Imporant"
        })
        const result = await htmldata.save();
        console.log(result)
    }catch(err){
        console.log(err);
    }
}

createDocument();