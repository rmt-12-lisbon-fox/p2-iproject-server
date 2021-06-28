'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Signal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Signal.init({
    title: DataTypes.STRING,
    signal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Signal',
  });
  return Signal;
};