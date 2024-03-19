//Comparision Query Operator
//$eq - {equal to} - Matches valuse that are "equal to" a specified value
//$ne - {not equal to} - Matches valuse that are "not equal to" a specified value
//$gt - {Geater than} - Matches valuse that are "Greater than" a specified value
//$gte - {Greater than equal to} - Matches valuse that are "Greater than equal to" a specified value
//$lt - {Less then} - Matches valuse that are "Less then" a specified value
//$lte - {Less than equal to} - Matches valuse that are "Less than equal to" a specified value
//$in - {} Matches any of the values specified in an array
//$nin - {} Matches none of the values specified in an array

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
            videos : 102,
            author:"Manish",
            active:true
        })
        
        const expressPlaylist = new Playlist({
            name:"Express Js",
            ctype : "Back End",
            videos : 105,
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
        const readResult = await Playlist
        // .find({ctype : {$in : ["Back End" , "Database","Front End"]}})
        .find({videos : {$nin : [50]}})
        .select({name : 1});
        console.log(readResult);
    }catch(err){
        console.log(err);
    }
}
readdata();