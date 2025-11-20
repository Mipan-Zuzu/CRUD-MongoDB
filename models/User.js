const mongoose = require("mongoose")

const UserScema = new mongoose.Schema({
    name : String,
    nis : Number,
    email : String,
    password : String
})

const User = mongoose.model('User', UserScema)


module.exports = User