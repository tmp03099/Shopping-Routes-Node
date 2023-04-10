// modules
const express = require("express");

//import
const stuffs = require("./models/merchandise");

//create app
const app = express();
const PORT = 3000;

//* Config views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
//setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url);
    next();
  });
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

//* ROUTE
app.get("/", (req,res)=> {
    res.send("<h1>SHOPPING</h1>")
});

//return category
app.get("/category", (req, res) => {
    // res.send(merchandises);
    res.render("Display", { merchandises: stuffs });
  });


// Show route: Return an single item
app.get("/merchandise/:indexOfMerchandiseArray", (req,res)=>{
    console.log(req.params);
    // res.render("Display",{mechandise: merchandises[req.params.indexOfMerchandiseArray]})
})