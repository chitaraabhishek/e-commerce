const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

const Products = require("./models/productSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
// all routes
app.use(router);

const port = 8005;
app.listen(port, () => {
  console.log(`Server is working port:${port}`);
});

DefaultData();
