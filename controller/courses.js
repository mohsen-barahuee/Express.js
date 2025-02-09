const courseModel = require("../models/course")

exports.getAll = async (req, res) => {
    // one to one realation
    // populate help us to Get The information of another models in adatabas

    // The Second Value on find and populate remove what items want to not show
    const getAllCourses = await courseModel.find({},"-__v").populate("teacher","-__v")

    res.status(200).json({ courses: getAllCourses })

}
