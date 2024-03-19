const EventEmitter = require("events");

const event = new EventEmitter();

const chalk = require("chalk")

event.on("Click",()=>{
    console.log("Hello !");
});
event.on("Click",()=>{
    console.log("Manish");
});
event.on("Click",()=>{
    console.log("Sharma");
});
event.on("hello",()=>{
    console.log(chalk.green.inverse("Hello Sir !"));
});

event.emit("Click");
event.emit("hello");
