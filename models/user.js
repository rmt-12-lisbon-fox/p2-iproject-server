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
      // define association here
      User.belongsToMany(models.Destination, { through: 'MyDestinations' });
    }
  };
  User.init({
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: {
          msg: "Email is required"
        },   
      }
    } ,
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: {
          msg: "Password is required"
        },   
      } 
    },
    domicile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};