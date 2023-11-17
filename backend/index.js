const server = require("./src/app")
require("dotenv").config();
const { PORT } = process.env;
require("./src/db")


server.listen(PORT,() => {
    console.log(`%s listening at ${PORT}`);
})

