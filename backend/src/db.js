const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env;


mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB Conectado"))
    .catch(err => console.log("Error al conctarse a MongoDB:", err))
