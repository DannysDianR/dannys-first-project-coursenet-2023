"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.hasMany(models.Skin);
    }
  }
  Hero.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      heroName: DataTypes.STRING,
      description: DataTypes.TEXT,
      priceBp: DataTypes.INTEGER,
      priceDm: DataTypes.INTEGER,
      typeAttack: DataTypes.STRING,
      atk: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Hero",
    }
  );
  return Hero;
};
