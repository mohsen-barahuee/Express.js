const mongoose = require("mongoose")


const commentsModel = mongoose.model(
    "Comment",
    new mongoose.Schema({
        body:{
            type:String,
            require: true
        }
    })
)

module.exports = commentsModel