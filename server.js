const express = require("express")

//CONFIG
require("dotenv").config()
const PORT = process.env.PORT

//INIT App instance
const app = express()


//Routes
app.get("/", (req, res) => {
    res.send("Welcome to bakery")
})

// all breads routes
const breadsController = require("./controllers/breads_controller")
app.use("/breads", breadsController)

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})