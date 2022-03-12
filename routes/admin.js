const express=require("express");
const routerAdmin=express.Router();
const pathDir=require("../util/path");
const path=require("path")

// products
const products=[]

routerAdmin.get("/add-product",(req, res, next) => {
    res.render("add-product", {title:"add-product"})
})
routerAdmin.post("/add-product",(req,res,next)=>{
    products.push({title:req.body.title,price:req.body.price, path:"admin/add-product"})
    res.redirect("/")
})

module.exports={routerAdmin,products}