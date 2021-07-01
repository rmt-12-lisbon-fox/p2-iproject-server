'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsToMany(models.User, { through: 'MyDestinations' });
    }
  };
  Destination.init({
    name: DataTypes.STRING,
    capital: DataTypes.STRING,
    phone_code: DataTypes.STRING,
    currency: DataTypes.STRING,
    wiki_url: DataTypes.STRING,
    flag_url: DataTypes.STRING,
    languages: DataTypes.STRING,
    timezone: DataTypes.STRING,
    countryCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};