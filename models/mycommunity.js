'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyCommunity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MyCommunity.init({
    UserId: DataTypes.INTEGER,
    CommunityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyCommunity',
  });
  return MyCommunity;
};