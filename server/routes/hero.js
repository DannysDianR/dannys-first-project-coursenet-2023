const { Router } = require("express");
const heroRoutes = Router();

//Ngambil semua data Heroes
heroRoutes.get("/", (req, res) => {
  res.send("Welcome to Hero Page");
});

//Menambahkan data Hero
heroRoutes.post("/add", (req, res) => {
  res.send("Welcome to add Hero Page");
});

//Menghapus data Hero
heroRoutes.delete("/delete/:heroId", (req, res) => {
  res.send("Welcome to Hero Page");
});

//Mengedit data Hero
heroRoutes.put("/edit/:heroid", (req, res) => {
  res.send("Welcome to Hero Page");
});

module.exports = heroRoutes;
