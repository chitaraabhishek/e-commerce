const Products = require("./models/productSchema");
const productsdata = require("./constant/productdata");

const DefaultData = async (req, res) => {
  try {
    await Products.deleteMany({});
    const storeData = await Products.insertMany(productsdata);
    // console.log(storeData);
  } catch (err) {
    // res.status(400).json({
    //   success: false,
    //   message: err.message,
    // });
  }
};

module.exports = DefaultData;
