const path=require("path");
const pathDir=require("./path");


const Err=(req,res,next)=>{
  res.status(404).render("404", {msg:"Page not found", title:"404"})
}

module.exports=Err