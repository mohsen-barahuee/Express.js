const mongoose = require("mongoose")
const teacherModel = require("./teacher")



const courseModel = mongoose.model("Course",{
    title: {
        type: String,
        require: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "Teacher"
    }

})


module.exports = courseModel