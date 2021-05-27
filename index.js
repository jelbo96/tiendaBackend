const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();

/* Si no esta definido port en .env default es 3000 */
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/* Root muestra si la aplicacion esta corriendo */
app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});

/* Llamar a products */
app.use("/products", productsRouter);

/* Manejador de errores */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

/* Mensaje al iniciar la app */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
