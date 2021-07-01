'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'Username required'
        },
        notNull:{
          args:true,
          msg:'Username required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:'Password required'
        },
        notNull:{
          args:true,
          msg:'Password required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:'Password required'
        },
        notNull:{
          args:true,
          msg:'Password required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance)=>{
    instance.password = hashPassword(instance.password)
  })
  return User;
};