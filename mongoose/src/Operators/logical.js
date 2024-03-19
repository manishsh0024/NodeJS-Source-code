//Logical Query Operator
//$and - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses
//$not - Inverts the effect of a query expression and returns documents that do not match the query expression.
//$nor - Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
//$or - Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

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


//Read data from mogoose database
const readdata = async () =>{
    try{
        const readResult = await Playlist
        // .find({$or : [{ctype : "Back End"},{author : "Manish Sharma"}]})
        .find({$and : [{ctype : "Back End"},{author : "Manish"}]})
        .select({name:1});
        console.log(readResult);
    }catch(err){
        console.log(err);
    }
}
readdata();