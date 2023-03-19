const { Skin, Hero, Type } = require("../models");

class SkinController {
  //Get Method
  static async getAllSkins(req, res) {
    try {
      let skins = await Skin.findAll({ include: [Hero, Type] });

      res.status(200).json(skins);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Details Method
  static async getDetailsSkin(req, res) {
    try {
      let id = Number(req.params.skinId);

      let result = await Skin.findByPk(
        // { include: [Hero, Type] },
        id,
        { include: [Hero, Type] }
      );

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: `Cannot find details skin of id ${id}. Please check again your db. Thank You`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Create Method
  static async addSkin(req, res) {
    try {
      const { name, image, priceBp, priceDm, HeroId, TypeId } = req.body;

      let result = await Skin.create({
        name,
        image,
        priceBp,
        priceDm,
        HeroId,
        TypeId,
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Delete Method
  static async deleteSkin(req, res) {
    try {
      let id = Number(req.params.skinId);

      let result = await Skin.destroy({ where: { id } });

      if (result) {
        res.status(200).json({
          message: `Your skin in id ${id} has been deleted. Thank You`,
        });
      } else {
        res.status(404).json({
          message: `Skin in id ${id} cannot find. Please check your db for the correct data. Thank You.`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Update Method
  static async editSkin(req, res) {
    try {
      const { name, image, priceBp, priceDm, HeroId, TypeId } = req.body;

      let id = Number(req.params.skinId);

      let result = await Skin.update(
        {
          name,
          image,
          priceBp,
          priceDm,
          HeroId,
          TypeId,
        },
        {
          where: { id },
        }
      );
      if (result[0] === 1) {
        res.status(200).json({
          message: `Your skin in id ${id} has been updated. Thank You`,
        });
      } else {
        res.status(404).json({
          message: `Skin in id ${id} cannot find. Please check your db for the correct data. Thank You.`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = SkinController;
