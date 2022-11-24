
import bodyParser = require("body-parser");
import express = require("express");
import cors from 'cors'
import mongoose from "mongoose";
import router from "./router/router";

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST','DELETE','UPDATE'],
    credentials:true
}))
app.use('/',router)
mongoose.connect("mongodb://localhost:27017/Table", (err) => {
    if (err) {
        console.log(err);

    } console.log("mongoose connected sUCCESSFULLY!");
    app.listen(3004, () => {
        console.log("server connected successfully");


    })

})