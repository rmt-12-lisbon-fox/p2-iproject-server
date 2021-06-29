'use strict';
const {
  Model
} = require('sequelize');
const {hash} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `email required`
        },
        isEmail: {
          msg: `please input your email address`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `password required`
        },
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(_)])[A-Za-z\d!@#$%^&*(_)]{5,10}$/,
          msg: `password must be contain 5 char - 10 char, at least 1 UPPERCASE, 1 lowercase, 1 Number, dan 1 Special-Character`
        }, 
      }   
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `phoneNumber required`
        },
        is: {
          args: /^(^0812|^0813)(\d{7}|\d{8}|\d{9})$/,
          msg: `your SIMPATI number is not valid, please enter your SIMPATI number with 0812 atau 0813 ==> 081299884455`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance) => {
    instance.password = hash(instance.password)
  })
  return User;
};