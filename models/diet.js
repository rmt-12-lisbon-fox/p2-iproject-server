'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    static associate(models) {
      // define association here
      Diet.belongsTo(models.Food, { foreignKey: "fdcId", constraints : false, targetKey : "fdcId" })
    }
  };
  Diet.init({
    userId: DataTypes.INTEGER,
    fdcId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Diet',
  });
  return Diet;
};