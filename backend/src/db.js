const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env;


mongoose.connect(MONGODB_URI).then(() => console.log("Conectado"))

// o

// mongoose.connect("mongodb://localhost:27017/schooldb",{
// family: 4,
// }).then(() => {
//     console.log("connection successfully ");
// })
