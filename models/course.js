const mongoose = require("mongoose")
// const teacherModel = require("./teacher")
const { teachersSchema } = require("./teacher")
const commentModel = require("./comment")


// const courseModel = mongoose.model("Course",{
//     title: {
//         type: String,
//         require: true
//     },
//     teacher: {
//         type: mongoose.Types.ObjectId,
//         ref: "Teacher"
//     }

// })




// const courseModel = mongoose.model("Course", {
//     title: {
//         type: String,
//         require: true
//     },
//     teacher: {
//         type: teachersSchema

//     },

//     // comments: [
//     //     {
//     //         type: mongoose.Types.ObjectId,
//     //         ref: "Comment"
//     //     },
//     // ]

// })




// Making Virtual Relation
const coursesSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    teacher: {
        type: teachersSchema

    },


})
coursesSchema.virtual("comments", {

    ref: "Comment",
    localField: "_id",
    foreignField: "course"

})

const coursesModel = mongoose.model("Course", coursesSchema)


module.exports = coursesModel