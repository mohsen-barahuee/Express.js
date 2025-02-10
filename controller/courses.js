
const courseModel = require("../models/course")
const commentsModel = require("../models/comment")


exports.getAll = async (req, res) => {
    // one to one realation
    // populate help us to Get The information of another models in adatabas

    // The Second Value on find and populate remove what items want to not show
    // const getAllCourses = await courseModel.find({},"-__v").populate("teacher","-__v")
    const getAllCourses = await courseModel.find({})
        .populate("comments")
        .populate("teacher")
         // for removing unnececey things

    res.status(200).json({ courses: getAllCourses })

}


exports.setComment = async (req, res) => {
    const { body,courseId } = req.body

    const comment = await commentsModel.create({
        body,
    })

    
    const userComments = await courseModel.findOneAndUpdate(
        { _id:courseId  },
        { $push: { comments: comment._id  } }, 
        { new: true })



    res.json({ message: userComments })

}