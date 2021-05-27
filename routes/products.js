const express = require("express");
const router = express.Router();
const products = require("../services/product");

/* Definición de la ruta products */
router.get("/", async function (req, res, next) {
  try {
    console.log("Trying to get products");
    res.json(await products.getProducts(req.query.text, req.query.category));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

/* Ruta categories */
router.get("/categories/", async function (req, res, next) {
  try {
    console.log("Trying to get categories");
    res.json(await products.getCategories());
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});

module.exports = router;
