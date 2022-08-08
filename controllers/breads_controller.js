const express = require("express")
const breadsRouter = express.Router()
const Breads = require("../models/bread_model")
//Index
breadsRouter.get("/", (req, res) => {
    //renders a view
    res.render("index", {
        breads: Breads,
        title: "Index Page"
    })
})

//Show details
breadsRouter.get("/:arrayIndex", (req, res) => {
    let index = req.params.arrayIndex
    //sends the raw data
    // res.send(Breads[index])
    console.log(`get request to /breads/${index}`,  Breads[index])
    res.render("show", {
        bread: Breads[index],
    })
})

module.exports = breadsRouter;