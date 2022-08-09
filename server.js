const express = require("express")

//CONFIG
require("dotenv").config()
const PORT = process.env.PORT

//INIT App instance
const app = express()

// MIDDLEWARE
app.use(express.static("public"))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//here is how to read that kind of data
app.use(express.urlencoded({extended: true}))


//Routes
app.get("/", (req, res) => {
    res.send("Welcome to bakery")
})

// all breads routes
const breadsController = require("./controllers/breads_controller")
app.use("/breads", breadsController)

//404 not found page
app.get("*", (req, res)=> {
    res.render("notfound")
})

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})