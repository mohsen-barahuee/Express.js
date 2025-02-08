const express = require("express")
const usersModel = require("../models/users")
const { isValidObjectId } = require("mongoose")
const usersRouter = express.Router()
const usersController = require("../controller/user")


usersRouter.get("/register", usersController.register)

usersRouter.post("/login", (req,res)=>{
    res.json({message : "User Is loging"})
})


// USING MULTI REQUESTS ON ONE ROUTE
usersRouter.route("/account")
.delete(usersController.remove)
.put(usersController.update)





module.exports = usersRouter