'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InviteMusic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InviteMusic.belongsTo(models.Music)
      InviteMusic.belongsTo(models.Invite)
    }
  };
  InviteMusic.init({
    InviteId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InviteMusic',
  });
  return InviteMusic;
};