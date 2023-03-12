const express = require("express");
const server = express();

const port = process.env.port || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const routesMain = require("./routes");
server.use(routesMain);

server.listen(port, () => {
  console.log(`Portnya Sudah jalan yg ini: ${port}`);
});
