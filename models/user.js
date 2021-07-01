'use strict';
const {
  Model
} = require('sequelize');

const {encode} = require ('../helpers/bcryptjs')

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
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email is required"
        },
        isEmail: {
          args: true,
          msg: "Invalid Email Format"
        }
      }
    },
    password: {
    type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is required"
        },
        len: {
          args: [5],
          msg: "Minimal Length is 5"
        }
      }
    },
    name: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: ( user, option ) => {
        user.password = encode ( user.password )
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};