'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddFriend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AddFriend.init({
    UserId: DataTypes.INTEGER,
    FriendId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AddFriend',
  });
  return AddFriend;
};