'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comedian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comedian.belongsToMany(models.User, { through: 'FavComedians', foreignKey: 'ComedianId' })
    }
  };
  Comedian.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    ytUrl: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comedian',
  });
  return Comedian;
};