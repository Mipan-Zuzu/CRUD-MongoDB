const express = require("express")
const routes = express.Router()
const { createUser } = require('../controllers/userController');
const { Types } = require("mongoose");
const User = require("../models/User")

routes.get("/", (req,res) => {
    res.send("testing routes")
})

routes.post("/api", createUser)

    async function getAllUsers() {
    try {
        const users = await User.find()
        console.log(users)
        routes.get("/fakeApi", (req, res) => {
            res.send([users])
        })
    } catch (err) {
        console.error(err);
    }
}

getAllUsers()

module.exports = routes;