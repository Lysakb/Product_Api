const express = require("express");
require("dotenv").config();
const {connectToMongodb} = require("./database");

const app = express();
connectToMongodb();

const PORT = 5000;


app.use(express.json());

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(400).send(err.message)
    next()
})

app.get("/", (req, res)=>{
    res.status(200).send("Home Page!!")
})

app.listen(PORT, ()=>{
    console.log(`Server listening at ${PORT}`)
})
