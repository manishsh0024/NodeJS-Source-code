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
    },
    ctype : {
        type:String,
        lowercase:true,
        enum:["back end","frontend","font end","database"]
    },

    //Custom Validation
    videos : {
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("Videos Count is not Negative");
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
            name:"Custom Validation",
            ctype : "database",
            videos : 5,
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




