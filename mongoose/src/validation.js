const mongoose = require("mongoose");

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
        // const reactPlaylist = new Playlist({
        //     name:"React Js",
        //     ctype : "Front End",
        //     videos : 90,
        //     author:"Manish",
        //     active:true
        // })
        // const jsPlaylist = new Playlist({
        //     name:"Js",
        //     ctype : "Front End",
        //     videos : 10,
        //     author:"Manish",
        //     active:true
        // })
        // const nodePlaylist = new Playlist({
        //     name:"Node Js",
        //     ctype : "Back End",
        //     videos : 50,
        //     author:"Manish",
        //     active:true
        // })
        // const mongoPlaylist = new Playlist({
        //     name:"Database",
        //     ctype : "Database",
        //     videos : 1002,
        //     author:"Manish",
        //     active:true
        // })
        
        const expressPlaylist = new Playlist({
            name:"Video hai",
            ctype : "UI/UX",
            videos : 200,
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




