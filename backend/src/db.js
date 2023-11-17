const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env;


async function handlerDataBase () {
    try {
        mongoose.connect(MONGODB_URI);
        console.log("Conected");
    } catch (error) {
        console.log("error al conectar bases de datos:", error);
    }
}
handlerDataBase();
