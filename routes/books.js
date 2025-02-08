const express = require("express")

const booksController = require('../controller/books')
const booksRouter = express.Router()


booksRouter.route("/")
    .get(booksController.getAll)
    .post(booksController.register)


module.exports = booksRouter

