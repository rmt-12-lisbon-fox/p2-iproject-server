'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.hasMany(models.Diet, { foreignKey: "fdcId" })
    }
  };
  Food.init({
    name: DataTypes.STRING,
    fdcId: DataTypes.INTEGER,
    protein: DataTypes.FLOAT,
    energy: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    cholesterol: DataTypes.FLOAT,
    carbohydrate: DataTypes.FLOAT,
    sugars: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};