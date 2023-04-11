// modules
const express = require("express");

//import
const menus = require("./models/Menu");

//create app
const app = express();
const PORT = 3000;

//Store Order
let order = [];
let userInfo = {};

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
app.use(express.urlencoded({ extended: false }));

//* ROUTE
app.get("/", (req, res) => {
  res.send("<h1>MENU</h1>");
});

// return menu
app.get("/menu", (req, res) => {
  // res.send(menus);
  res.render("Display", { menus: menus });
});

// Show Option Route: return a list of option
app.get("/menu/:menuIdx/:id/options", (req, res) => {
  res.render("ShowOptional", {
    drink: menus[req.params.menuIdx],
    id: req.params.id,
  });
});

// Custom route: Return a user custom order
app.get("/menu/custom", (req, res) => {
  res.render("Custom");
});

// addToCart Route: (return a buy list)
app.get("/menu/addToCart", (req, res) => {
  res.render("addToCart", { order: order });
});

//POST method (accepted data from the form)
app.post("/menu/addToCart", (req, res) => {
  order.push(req.body);
  console.log(order);
  res.redirect("/menu/addToCart");
});

// User Form Route: show a user input form
app.get("/menu/addToCart/form", (req, res) => {
  res.render("InfoForm");
});

//Updated Form Route
app.post("/menu/addToCart/form", (req, res) => {
  userInfo = req.body;
  res.render("InfoForm", { userInfo: userInfo });
});

// Show route: Return an single item
app.get("/menu/:indexOfMenuArray", (req, res) => {
  console.log(req.params);
  // res.send(menus[req.params.indexOfMenuArray]);
  res.render("ShowName", {
    menu: menus[req.params.indexOfMenuArray],
    menuIdx: req.params.indexOfMenuArray,
  });
});

//if none of the routes matches the request will show 404 page
app.get("*", (req, res) => {
  //res.redirect('/fruits')
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
