'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Community, {through: 'MyCommunities'})
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "First Name cannot empty"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Last Name cannot empty"
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email cannot empty"
        },
        isEmail: {
          msg: "Must email format"
        },
        notNull: {
          msg: "Email is required"
        },
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password cannot empty"
        },
        len: {
          args: [5],
          msg: "Password minimum 5 characters"
        },
        notNull: {
          msg: "Password is required"
        },
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};