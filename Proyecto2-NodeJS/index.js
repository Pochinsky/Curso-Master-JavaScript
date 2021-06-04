"use strict";
const mongoose = require("mongoose");
const app = require("./app");
const port = 3700;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Conectado al servidor");
    app.listen(port, () => {
      console.log("Servidor corriendo");
    });
  })
  .catch((error) => console.log(error));
