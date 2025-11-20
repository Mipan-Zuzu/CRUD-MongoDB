const User = require("../models/User")
const express = require("express")
const app = express()
app.use(express.json());

const createUser = async (req, res) => {
    try {
        const {name = "mipassssn", nis, email, password} = req.body

        const newUser = new User({
            name,
            nis,
            email,
            password
        })

        const savedUser = await newUser.save()

        res.status(200).json({message : "user berhasil di buat", user : savedUser})
    }catch (error) {
        res.status(500).json({message : "ada kesalahan terjadi", error : error.message})
    }
}

module.exports = { createUser }