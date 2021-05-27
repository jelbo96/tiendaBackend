const db = require("./db");
const config = require("../config");

async function getProducts(text = "", category = "") {
  let rows = [];
  if (text) {
    /* Si hay texto corresponde a busqueda */
    rows = await db.query(`SELECT * from product where name LIKE '%${text}%'`);
  } else if (category) {
    /* Si hay categoria corresponde a traer solo los de una categoria */
    rows = await db.query(`SELECT * from product where category = ${category}`);
  } else {
    /* Sino trae todos los datos */
    rows = await db.query(`SELECT * FROM product`);
  }

  return { rows };
}

async function getCategories() {
  let rows = [];
  /* Obtiene array de categorias */
  rows = await db.query(`select * from category c`);

  return { rows };
}

module.exports = {
  getProducts,
  getCategories,
};
