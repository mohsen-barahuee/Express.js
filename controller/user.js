const usersModel = require("../models/users")


exports.register = async (req, res) => {
    const users = await usersModel.find()
    res.json({ message: users })
}

exports.remove = (req, res) => {

    res.json({ message: "User Deleted" })
}

exports.update = (req, res) => {
    res.json({ message: "User Updated" })
}