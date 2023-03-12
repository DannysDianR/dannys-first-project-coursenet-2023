const { Router } = require("express");
const routesMain = Router();
const mainEndpoint = "/api";

routesMain.get(mainEndpoint, (req, res) => {
  res.send("Welcome to HomePage Mobile Legends");
});

const heroRoute = require("./hero");
routesMain.use(`${mainEndpoint}/heroes`, heroRoute);

module.exports = routesMain;
