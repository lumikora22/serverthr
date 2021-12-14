const mongoose = require("mongoose");

const URI =
  "mongodb+srv://admin:admin@clientes.hrumb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then((db) => console.log("DB Connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
