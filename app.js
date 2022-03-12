const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {routerAdmin}=require("./routes/admin");
const Err= require("./util/err")
const shop=require('./routes/shop');
const path=require("path");
const  expressHbs=require("express-handlebars")

// reading form data middleware
app.use(bodyParser.urlencoded({extended:false}))

// adding css middleware
app.use(express.static(path.join(__dirname,"public")))

// handlebars template middleware
app.engine(
  'hbs',
  expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

//pug template middleware
// app.set("view engine", "pug");
// app.set("views","views")

// route use
app.use("/admin",routerAdmin)
app.use(shop)

// error message
app.use(Err);

// server
const port=5000
app.listen(5000,(err)=>{
  console.log(`App is running on ${port}`)
  if(err){
      console.log(err)
      return
  }  
});