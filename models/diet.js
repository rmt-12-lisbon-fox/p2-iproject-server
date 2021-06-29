'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    static associate(models) {
      // define association here
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