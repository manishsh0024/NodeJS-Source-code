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
        required : true
    },
    ctype : String,
    videos : Number,
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
        const reactPlaylist = new Playlist({
            name:"React Js",
            ctype : "Front End",
            videos : 90,
            author:"Manish",
            active:true
        })
        const jsPlaylist = new Playlist({
            name:"Js",
            ctype : "Front End",
            videos : 10,
            author:"Manish",
            active:true
        })
        const nodePlaylist = new Playlist({
            name:"Node Js",
            ctype : "Back End",
            videos : 50,
            author:"Manish",
            active:true
        })
        const mongoPlaylist = new Playlist({
            name:"Database",
            ctype : "Database",
            videos : 1002,
            author:"Manish",
            active:true
        })
        
        const expressPlaylist = new Playlist({
            name:"Express Js",
            ctype : "Back End",
            videos : 1002,
            author:"Manish",
            active:true
        })
        
        //Save Many Data at one time
       const result = await Playlist.insertMany([reactPlaylist,jsPlaylist,nodePlaylist,mongoPlaylist,expressPlaylist]);
       console.log(result);
    }catch(err){
        console.log(err);
    }
}

// createDocument(); 

const readdata = async () =>{
    try{
        const readResult = await Playlist.find({ctype : "Front End"})
        .select({name:1})
        .limit(1);
        console.log(readResult);
    }catch(err){
        console.log(err);
    }
}
readdata();