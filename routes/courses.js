const express = require("express")
const coursesController = require("./../controller/courses")

const coursesRouter = express.Router()


coursesRouter.get("/",coursesController.getAll)



module.exports = coursesRouter