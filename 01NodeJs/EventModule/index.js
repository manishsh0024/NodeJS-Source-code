const { ok } = require("assert");
const chalk = require("chalk");


const EventEmitter = require("events")

const event = new EventEmitter();

// event.on("Click",()=>{
//     console.log(chalk.blue.inverse("Hello Brother"));
// });

// //we can fire or emit multiple events with one event emit 
// event.on("Click",()=>{
//     console.log(chalk.green.inverse("Hello Bussiness Partner"));
// });
// event.on("Click",()=>{
//     console.log(chalk.red.inverse("Owner of Advance Tech-Hub"));
// });

// event.emit("Click");

event.on("checkPage",(sc , msg)=>{
    console.log(`Status Code is ${sc} and page is ${msg}`);
});
event.emit("checkPage", 200 , "ok");