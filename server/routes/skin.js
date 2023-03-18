const { Router } = require("express");
const skinRoute = Router();

const { SkinController } = require("../controllers");

// Get Method
skinRoute.get("/", SkinController.getAllSkins);
skinRoute.get("/details/:skinId", SkinController.getDetailsSkin);

// Post Method
skinRoute.post("/add", SkinController.addSkin);

// Delete Method
skinRoute.delete("/delete/:skinId", SkinController.deleteSkin);

// Put Method
skinRoute.put("/edit/:skinId", SkinController.editSkin);

module.exports = skinRoute;
