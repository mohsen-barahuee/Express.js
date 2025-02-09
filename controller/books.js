const booksModel = require("../models/books")


exports.getAll = async (req, res) => {


    //for getting Query in url
    // How we Search == http://localhost:3000/api/books?search="شاهنامه"
    console.log("Req Query", req.query) //--> out Put = Req Query { search: '"شاهنامه"' }

    const allBooks = await booksModel.find()
    res.status(200).json({ Books: allBooks })

}



exports.register = async (req, res) => {

    const { title, author, price } = req.body

    if (!title || !author || !price) {
        return res.json({ message: "Error" })
    }

    const newBook = await booksModel.create({ title, author, price })

    res.status(201).json({ message: "Books Is Created", Book: newBook })


}



