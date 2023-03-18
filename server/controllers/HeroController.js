const { Hero } = require("../models/");

class HeroController {
  // Get Method
  static async getAllHeroes(req, res) {
    try {
      let result = await Hero.findAll();

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Details Method
  static async getDetailsHero(req, res) {
    try {
      let id = Number(req.params.heroId);

      let heroAcc = await Hero.findOne({ where: { id } });

      if (heroAcc) {
        res.status(200).json(heroAcc);
      } else {
        res.status(404).json({
          messasge: "Your id is wrong. Please check again the id correctfully",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Login Method
  static async loginHero(req, res) {
    const { email, password } = req.body;

    let heroFound = await Hero.findOne({ where: { email } });

    if (heroFound) {
      if (heroFound.password === password) {
        res.status(200).json(heroFound);
      } else {
        res.status(404).json({
          message: "Your Password is wrong, please input correctly. Thank You",
        });
      }
    } else {
      res
        .status(404)
        .json({
          message: "Your email is wrong, please input correctly. Thank You",
        });
    }
  }

  // Create Method
  static async registerHero(req, res) {
    try {
      const {
        email,
        password,
        heroName,
        description,
        priceBp,
        priceDm,
        typeAttack,
        atk,
        hp,
      } = req.body;

      let result = await Hero.create({
        email,
        password,
        heroName,
        description,
        priceBp,
        priceDm,
        typeAttack,
        atk,
        hp,
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Delete Method
  static async deleteHero(req, res) {
    try {
      let id = Number(req.params.heroId);

      let result = await Hero.destroy({
        where: { id },
      });

      if (result) {
        res.status(200).json({
          message: `Your data in this id ${id} has been deleted. Thank You`,
        });
      } else {
        res.status(404).json({
          message: `Id ${id} is wrong. Please check again id that you want to delete. Thank you`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Edit Method
  static async editHero(req, res) {
    try {
      const {
        email,
        password,
        heroName,
        description,
        priceBp,
        priceDm,
        typeAttack,
        atk,
        hp,
      } = req.body;

      let id = Number(req.params.heroId);

      let result = await Hero.update(
        {
          email,
          password,
          heroName,
          description,
          priceBp,
          priceDm,
          typeAttack,
          atk,
          hp,
        },
        {
          where: { id },
        }
      );

      if (result[0] === 1) {
        res.status(200).json({ messasge: `Id ${id} is updated. Thank you` });
      } else {
        res.status(404).json({
          messasge:
            "Your id is wrong. Please check again your db for the correctivity",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = HeroController;
