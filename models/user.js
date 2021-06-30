'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('../helpers/bcrypt')
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
        isEmail: {
          msg: "Email must be in email format"
        },
        notEmpty: {
          msg: "Email is required"
        },   
      }
    } ,
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {        
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
  User.addHook('beforeCreate', (user, options) => {
    user.password = bcrypt.hash(user.password);
    user.username = user.email.split('@')[0];
  });
  return User;
};