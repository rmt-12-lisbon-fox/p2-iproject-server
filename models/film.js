'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Film.init({
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    vtype: DataTypes.STRING,
    synopsis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};