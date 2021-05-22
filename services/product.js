const db = require("./db");
//const helper = require('../helper');
const config = require("../config");

async function getProducts() {
  //const offset = helper.getOffset(page, config.listPerPage);
  console.log('getting products')
  const rows = await db.query(`SELECT * FROM product`);
  return { rows };
}

module.exports = {
  getProducts,
};
