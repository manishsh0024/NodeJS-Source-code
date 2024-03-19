const express = require("express");
require("./db/conn")
const MensRouter = require("./routers/MensMethods");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(MensRouter);



app.listen(PORT, () => {
    console.log("Connection Successful");
    console.log(`Running on Port No. ${PORT}`);
})