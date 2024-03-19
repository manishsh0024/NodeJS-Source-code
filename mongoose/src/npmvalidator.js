const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/nodedata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Connection Succesful...."))
.catch((err)=>console.log(err));

const playlistSchema= new mongoose.Schema({
    name:{
        type: String,
        required : true,
        lowercase:true,
        trim:true,
        minlength:[2 , "Minimum 2 letters Required"],
        maxlength:20
    },
    ctype : {
        type:String,
        lowercase:true,
        enum:["back end","frontend","font end","database"]
    },
    videos : {
        type:Number,
        min:1,
        max:1000
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not Valid");
            }
        }
    },
    author:String,
    active:Boolean,
    date: {
        type:Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema);

//create document
const createDocument = async () =>{
    try{
        const expressPlaylist = new Playlist({
            name:"Email",
            ctype : "database",
            videos : 200,
            email:"manis123@gmail.c",
            author:"Manish",
            active:true
        })
        
        //Save Many Data at one time
       const result = await Playlist.insertMany([expressPlaylist]);
       console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument(); 




