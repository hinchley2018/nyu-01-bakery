const express = require("express")
const breadsRouter = express.Router()
const Breads = require("../models/bread_model")
//Index
breadsRouter.get("/", (req, res) => {
    res.render("index", {
        breads: Breads,
        title: "Index Page"
    })
})

//Show details
breadsRouter.get("/:arrayIndex", (req, res) => {
    let index = req.params.arrayIndex
    res.send(Breads[index])
})

module.exports = breadsRouter;