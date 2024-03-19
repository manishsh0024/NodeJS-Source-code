const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs"); //To use partials
const requests = require("requests");
const port = 8000;


//to set the view engine
const staticPath = path.join(__dirname , "../public");

//we can change the name of default folder views to template or other name 
const Templatepath = path.join(__dirname , "../template/views");

const partialPath = path.join(__dirname , "../template/partials");



app.set("view engine", "hbs");
app.set("views",Templatepath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

//template engine Routing
app.get("/",(req , res)=>{
    res.render('index',{
        btnName:"Get Started",
    });
});
// app.get("/about.hbs",(req , res)=>{
//     res.render('about',{
//         btnName:"Get Started",
//     });
// });
app.get("/about",(req , res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=716ac8edddc53b7d888919771c89c46e`
        )
    .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        console.log(`City Name ${arrdata[0].name} and Temp : ${arrdata[0].main.temp}`);
        res.write(arrdata[0].name);
        
    })
    .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        console.log('end');
    });
});


app.listen(port , () => {
    console.log(`listen on port no. ${port}`);
});
















//----------------------_PRIVIOUS CLASSES_----------------------
// const express = require("express");
// const app = express();
// const port = 8000;
// const path = require("path");


// const staticPath = path.join(__dirname , "../public")

// //Built-in Middleware
// app.use(express.static(staticPath));

// app.get("/" ,(req , res) => {
//     res.send("Hello from the server");
// });


