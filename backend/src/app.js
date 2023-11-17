// const routes = require("../src/routes/index")

const express = require("express")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")

const server = express();

server.use(morgan("dev"))  //informacion de solicitudes, estados, metodos
server.use(express.json())
server.use(cookieParser()) //analiza y facilita las cookies
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));                         //configuarcion de archivos json y tamaños de mb
server.use(cors()) //seguridad
server.use((req, res, next) => { //middleware de cors de seguirdad de accesos y demas
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// server.use("/", routes)

module.exports = server