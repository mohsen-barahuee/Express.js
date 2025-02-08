const express = require("express")
const app = express()
const bookRouter = require("./routes/books")
require("./configs/db")
const usersRouter = require("./routes/users")
const usersModel = require("./models/users")
//using middelware in folders
const testMiddelWare = require("./midelware/test")

const morgan = require("morgan")


// for clearing middelWare handlers
const omitEmpty = require("omit-empty")
console.log(omitEmpty({
    firstname: "",
    lastename: "",
    phone: "03124122",
    email:
}))


const camelcaseKeys = (...args) => import(camelcaseKeys).then(({ default: camelcase }) => camelcase(args))

// VALIDATORS PACKAGES
// const registerValidator = require("./validators/resgister")



//Json The Requests body
app.use(express.json())

// Pare The Request Body
app.use(express.urlencoded())


// WE USE THIS PACKAGE TO SHOW LOGS AND WHAT REQUESTS WE SEND TO WHAT URL
app.use(morgan('dev'))



// USING EXPRESS ROUTES/mytest/:testing
app.use("/api/users/", usersRouter)
app.use("/api/books/", bookRouter)


//HOW USING MIDELWARE 
app.get("/mytest/:testing", testMiddelWare.middleWare, async (req, res) => {

    res.json({ message: "midleware End", para: req.params.testing, })
})


// app.post("/api/users", async (req, res) => {

//     // const validationResult = registerValidator(req.body)
//     // if (!validationResult) {
//     //     return res.status(422).json({ message: "Data Is Not Valid" })
//     // }


//     let { name, username, age, email } = req.body
//     const result = await usersModel.create({ name, username, age, email })
//     res.status(201).json({ message: "User Created!!", ...result })

// })


// app.delete("/api/users/:id", async (req, res) => {

//     let { id } = req.params

//     // const result = await usersModel.findOneAndDelete()
//     const deleteUser = await usersModel.findByIdAndDelete({ _id: id })

//     res.json({ message: "UserDeleted", id })

// })








// // FIRST VALUE / GET PATH AND IN SECOND WE MAKE THE REQUEST ADN RESPONSE
// app.get('/', (req, res) => {

//     res.send("Hello API")

// })


// // WE US : TO SEARCH IN URL AND GET PARAMS
// app.get("/courses/:id", (req, res) => {

//     // GETING REQUESTS URL PARAMS
//     console.log(req.params.id)

//     const course = courses.find(course => course.id === Number(req.params.id))
//     if (course) {
//         res.json(course)
//     } else {
//         res.send("<h1>Course not Found</h1>")
//     }
// })


// app.post("/courses", (req, res) => {



//     res.status(201).json({
//         message: "New Course Created successfully",
//         bodyRequests: req.body
//     })

// })

// // THIS HOW WE SEND THE REQUEST http://localhost:3000/courses/2
// app.delete("/courses/:id", (req, res) => {

//     console.log("New Course Deleted successfully")
//     res.status(200).json(`Course${req.params.id} Deleted successfully`)

// })


// app.get('/api/users/:userID/articles/:articleID', (req, res) => {

//     res.status(200).json(`user ID : ${req.params.userID} --  article ID : ${req.params.articleID}`)



// })


// app.put("/courses:id", (req, res) => {

//     console.log("New Course Updated successfully")
//     res.status(401).json("New Course Updated successfully")
// })



// SERVER IS RUNNING ON PORT 3000
app.listen(3000, () => {
    console.log("Server Running On Port 3000")

})