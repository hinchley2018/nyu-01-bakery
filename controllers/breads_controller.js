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
    const bread = Breads[index]
    console.log(`get request to /breads/${index}`, bread )
    //if that bread was found
    if (bread){
        res.render("show", {
            bread: bread,
        })
    }
    else {
        res.render("notfound")
    }
    
})

module.exports = breadsRouter;