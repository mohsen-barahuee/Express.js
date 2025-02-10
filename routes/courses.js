const express = require("express")
const coursesController = require("./../controller/courses")

const coursesRouter = express.Router()


coursesRouter.route("/").get(coursesController.getAll)
coursesRouter.route("/comments").post(coursesController.setComment)



module.exports = coursesRouter