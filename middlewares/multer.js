const { error } = require("console")
const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + Math.random()

        // file format
        const ext = path.extname(file.originalname)

        const validFormats = ["image/jpg", "image/png", "image/jpeg"]
        if (validFormats.includes(file.mimetype)) {

            cb(null, `${filename}${ext}`)
        }else{
            cb(new Error("File Format is Not Valid"))
        }

    }
})


const maxSize = 3 * 1000 * 1000 // => 1KB


const uploader = multer({
    storage,
    //  limits: {
    //     fileSize: maxSize
    // }
})


module.exports = uploader