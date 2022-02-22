const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");

// get productsdata api
router.get("/getproducts", async (req, res) => {
  try {
    const productdata = await Products.find();
    // console.log("console the data" + productdata);
    res.status(200).json(productdata);
  } catch (err) {
    res.status(500).json({
      success: false,
      meassage: err.meassage,
    });
  }
});

module.exports = router;
