const mongoose = require("mongoose")

const booksModel = mongoose.model("books", {
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        minLenght: 1000
    },
  
})


module.exports = booksModel