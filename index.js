const express = require("express");
const app = express();
var cors = require("cors");
const { mongoose } = require("./database");
const path = require("path");
//Settings
app.use(cors());
app.set("port", process.env.PORT || 3200);
//middlewares
app.use(express.json());
//Routes
app.use(require("./routes/question"));

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(app.get("port"), () =>
  console.log("server listening on port ", app.get("port"))
);
