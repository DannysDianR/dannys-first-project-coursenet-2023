const { Type } = require("../models");

class TypeController {
  //Get Method
  static async getAllTypes(req, res) {
    try {
      let result = await Type.findAll();

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Details Method
  static async getDetailsType(req, res) {
    try {
      const id = Number(req.params.typeId);

      let result = await Type.findByPk(id);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message:
            "You cannot find any Type of Skins. Please add the type first!!",
        });
      }
    } catch (err) {
      re.status(500).json(err);
    }
  }

  //Create Method
  static async addType(req, res) {
    const { name } = req.body;

    try {
      let result = await Type.create({
        name,
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Update Method
  static async editType(req, res) {
    let id = Number(req.params.typeId);
    const { name } = req.body;

    try {
      let result = await Type.update(
        {
          name,
        },
        {
          where: { id },
        }
      );

      if (result[0] === 1) {
        res.status(200).json({
          message: "Your type has been updated.",
        });
      } else {
        res.status(404).json({
          message:
            "You cannot find the id of Type you want to update. Make sure the id is correct!!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Delete Method
  static async deleteType(req, res) {
    let id = Number(req.params.typeId);

    let result = await Type.destroy({
      where: { id },
    });

    if (result) {
      res.status(200).json({
        message: "Your Type has been Deleted.",
      });
    } else {
      res.status(404).json({
        message:
          "You cannot find the Type id that want to delete. Please check again the id.",
      });
    }
  }
}

module.exports = TypeController;
