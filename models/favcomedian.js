'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavComedian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FavComedian.init({
    UserId: DataTypes.INTEGER,
    ComedianId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavComedian',
  });
  return FavComedian;
};