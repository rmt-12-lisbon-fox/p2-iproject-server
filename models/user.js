'use strict';
const { hashPassword } = require('../helpers/bcrypt')

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
      User.belongsToMany(models.Tamplate, { through: models.Invite })
    }
  };
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'full name can not be empty'
        },
        notNull: {
          msg: 'full name null'
        },
      }
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'email can not be empty'
        },
        notNull: {
          msg: 'email null'
        },
        isEmail: {
          msg: 'format email foo@email.com'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password can not be empty'
        },
        notNull: {
          msg: 'password null'
        },
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'photo can not be empty'
        },
        notNull: {
          msg: 'photo null'
        },
      }
    },
    role: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'phone number can not be empty'
        },
        notNull: {
          msg: 'phone number null'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password);
        let username = ''
        for (let i = 0; i < instance.fullName.length; i++) {
          if (instance.fullName[i] !== ' ') {
            username += instance.fullName[i]
          }
        }
        instance.username = username.toLocaleLowerCase();
        instance.role = 'customer'
      }
    }
  });
  return User;
};