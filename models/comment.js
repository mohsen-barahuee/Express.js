const mongoose = require("mongoose")


const commentsModel = mongoose.model(
    "Comment",
    new mongoose.Schema({
        body: {
            type: String,
            require: true
        },

        // Virtual realation
        course: {
            type: mongoose.Types.ObjectId,
            ref: "Course"
        }
    })
)

module.exports = commentsModel