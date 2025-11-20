const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const chalk = require("chalk")
const cors = require("cors")
dotenv.config()
const app =express()
const userRoutes = require("./routes/userRoutes")
const { createUser } = require('./controllers/userController');

app.get("/", (req, res) => {
    res.send("<center><h1>home welcome</h1></center>")

})

app.use("/user", userRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/mipan",{
    serverSelectionTimeoutMS: 2000,
})
.then(()=>{console.log("connected")})
.catch((error => console.log("Error:", error.message)))

const port = 3000

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})