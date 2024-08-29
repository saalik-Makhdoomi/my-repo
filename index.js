const express = require("express");
const app = express();
const path = require("path");
const xhbs = require("express-handlebars");



// middleware:
app.use(express.static(path.join(__dirname, 'public')))


// setting hbs enigine:
app.engine("hbs" , xhbs.engine({
    extname: "hbs",     // engine
    defaultLayout: "layout",   // layout is the main page 
    layoutsDir: path.join(__dirname, "views", "layout"),
    partialsDir: path.join(__dirname, "views" , "partials"),
  }))
  
  app.set("view engine", "hbs");
  app.set("views" , path.join(__dirname , "views" , "pages"))
  

//api routes:

app.get('/', (req,res) => {
    res.send("Hello this is browser");
});

app.get('/server',(req,res) => {
    res.render("index")
});
app.get('/contact',(req,res) => {
    res.render("contact")
})



app.listen(3000, () => {
    console.log("server started at port no.3000");
});