const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const {products} =require("./admin")



router.get('/', (req, res, next) => {
  console.log(products)
  res.status(200).render("shop",{prod:products, title:"My Shopping",prodTitle:"Great Books",path:"/"})
});

module.exports = router;
