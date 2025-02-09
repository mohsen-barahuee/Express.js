const mongoose = require("mongoose")


const teacherModel = mongoose.model("Teacher",{
    fullname: {
        type: String,
        require: true
    }
})


module.exports = teacherModel