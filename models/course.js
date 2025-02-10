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
const courseModel = mongoose.model("Course", {
    title: {
        type: String,
        require: true
    },
    teacher: {
        type: teachersSchema

    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        },
    ]

})


module.exports = courseModel