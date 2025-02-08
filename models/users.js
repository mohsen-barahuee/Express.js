const mongoose = require("mongoose")



const usersModel = mongoose.model("users", {
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
    }
    , age: {
        type: Number,
        // min: 18
        default: 18
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = usersModel