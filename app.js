const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Err= require("./util/err")
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

// route use
app.use('/admin', adminData.routes);
app.use(shopRoutes);

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