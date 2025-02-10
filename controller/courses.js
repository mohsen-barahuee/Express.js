
const courseModel = require("../models/course")
const commentsModel = require("../models/comment")
const coursesModel = require("../models/course")


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

// how Get Virtual Comments
exports.getOne = async (req, res) => {

    const {title} = req.params
    
    const course = await coursesModel.findOne({title})
    // console.log(title, course._id)
    const comments = await commentsModel.find({course: course._id}).lean()

    res.json({message : "course one", courseComments:comments})
    
    

}



exports.setComment = async (req, res) => {
    // const { body, courseId } = req.body

    // const comment = await commentsModel.create({
    //     body,
    // })


    // const userComments = await courseModel.findOneAndUpdate(
    //     { _id: courseId },
    //     { $push: { comments: comment._id } },
    //     { new: true })

    await commentsModel.create({
        body:"How Long Takes To Complete Course?",
        course:"67a881b100c629db0e1bda79"
    })


    res.json({ message: "Comment Created" })

}