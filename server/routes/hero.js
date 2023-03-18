const { Router } = require("express");
const heroRoutes = Router();
const { HeroController } = require("../controllers");

//Ngambil semua data Heroes
heroRoutes.get("/", HeroController.getAllHeroes);
heroRoutes.get("/details/:heroId", HeroController.getDetailsHero);
// heroRoutes.get("/details/:heroId/:skinId", (req, res) => {
//   res.send("Welcome to Skin + Details Hero Page");
// });

//Login sebagai Hero
heroRoutes.post("/login", HeroController.loginHero);

//Menambahkan data Hero
heroRoutes.post("/register", HeroController.registerHero);

//Menghapus data Hero
heroRoutes.delete("/delete/:heroId", HeroController.deleteHero);

//Mengedit data Hero
heroRoutes.put("/edit/:heroId", HeroController.editHero);

module.exports = heroRoutes;
