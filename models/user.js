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
      User.hasMany(models.Review);
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email has been taken'
      },
      validate: {
        notEmpty: {
          msg: 'Email should not be empty'
        },
        isEmail: {
          msg: 'Email should be in email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password should not be empty'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name should not be empty'
        }
      }
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};