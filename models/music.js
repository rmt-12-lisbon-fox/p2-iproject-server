'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Music.belongsToMany(models.Invite, { through: models.InviteMusic })
      Music.hasMany(models.InviteMusic)
    }
  };
  Music.init({
    title: DataTypes.STRING,
    musicUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
  });
  return Music;
};