const db = require("./db");
const config = require("../config");

async function getProducts(text = "") {
  console.log("getting products");
  let rows = [];
  if (text) {
    console.log("searching");
    rows = await db.query(`SELECT * from product where name LIKE '%${text}%'`);
  } else {
    rows = await db.query(`SELECT * FROM product`);
  }

  return { rows };
}

module.exports = {
  getProducts,
};
