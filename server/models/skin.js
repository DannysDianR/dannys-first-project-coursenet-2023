"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skin.belongsTo(models.Hero);
      Skin.belongsTo(models.Type);
    }
  }
  Skin.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      priceBp: DataTypes.INTEGER,
      priceDm: DataTypes.INTEGER,
      HeroId: DataTypes.INTEGER,
      TypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skin",
    }
  );
  return Skin;
};
