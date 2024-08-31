const express = require("express");
const app = express();
const path = require("path");
const xhbs = require("express-handlebars");

// middleware:
app.use(express.static(path.join(__dirname, "public")));

// setting hbs enigine:
app.engine(
  "hbs",
  xhbs.engine({
    extname: "hbs", // engine
    defaultLayout: "layout", // layout is the main page
    layoutsDir: path.join(__dirname, "views", "layout"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views", "pages"));




// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 30, image: 'product1.jpg', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'product2.jpg', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg', description: 'Description of Product 3' },
  ];

//api routes:

// app.get("/", (req, res) => {
//   res.send("Hello this is browser");
// });


app.get("/cart", (req, res) => {
  res.render("cart");
});


app.get("/home", (req,res) => {
    res.render("home",{products});
});




app.listen(3000, () => {
  console.log("server started at port no.3000");
});
