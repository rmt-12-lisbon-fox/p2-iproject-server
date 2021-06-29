'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tamplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tamplate.belongsToMany(models.User, { through: models.Invite })
    }
  };
  Tamplate.init({
    version: DataTypes.STRING,
    imgT: DataTypes.STRING,
    imgL: DataTypes.STRING,
    imgR: DataTypes.STRING,
    imgB: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tamplate',
  });
  return Tamplate;
};