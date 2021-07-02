'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Program, {through : models.Schedule})
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    },
    age: {
      type : DataTypes.INTEGER,
    },
    gender: {
      type : DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};