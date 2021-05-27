const db = require("./db");
const config = require("../config");

async function getProducts(text = "") {
  let rows = [];
  if (text) {
    /* Si hay texto corresponde a busqueda */
    rows = await db.query(`SELECT * from product where name LIKE '%${text}%'`);
  } else {
    /* Sino trae todos los datos */
    rows = await db.query(`SELECT * FROM product`);
  }

  return { rows };
}

module.exports = {
  getProducts,
};
