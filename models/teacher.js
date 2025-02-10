const mongoose = require("mongoose")


// Reference
// const teacherModel = mongoose.model("Teacher",{
//     fullname: {
//         type: String,
//         require: true
//     }
// })

// module.exports = teacherModel


// Embedded 
const teachersSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true
    }
})


const teacherModel = mongoose.model("Teacher",teachersSchema)


module.exports = {teachersSchema, teacherModel }