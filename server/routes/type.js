const { Router } = require("express");
const typeRoutes = Router();

const { TypeController } = require("../controllers");

//Get Method
typeRoutes.get("/", TypeController.getAllTypes);
typeRoutes.get("/details/:typeId", TypeController.getDetailsType);

//Add Method
typeRoutes.post("/add", TypeController.addType);

//Delete Method
typeRoutes.delete("/delete/:typeId", TypeController.deleteType);

//Update Method
typeRoutes.put("/edit/:typeId", TypeController.editType);

module.exports = typeRoutes;
