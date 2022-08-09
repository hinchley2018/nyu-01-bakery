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

//POST requests to /breads
breadsRouter.post("/", (req, res) => {
    console.log("got a POST request to /breads", req.body)
    let newBread = req.body
    //if has gluten is defined
    if (newBread.hasGluten === "true"){
        newBread.hasGluten = "true"
    }
    else {
        //assume it does not have gluten 
        newBread.hasGluten = "false"
        //in a real app don't assume throw a 400 //res.status(400).send("error must define hasGluten")
    }
    //insert the bread
    Breads.push(newBread)
    // res.send({"message":  "created a new bread", newBread})
    //redirect to the breads index
    res.redirect("/breads")
})

//view to create new breads /breads/new
breadsRouter.get("/new", (req, res) => {
    res.render("new")
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