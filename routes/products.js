const express = require("express");
const router = express.Router();
const products = require("../services/product");

router.get("/", async function (req, res, next) {
  try {
    console.log('Trying to get products')
    res.json(await products.getProducts());
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;
