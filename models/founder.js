'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Founder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Founder.hasMany(models.Review, {foreignKey: 'FounderId'})
    }
  };
  Founder.init({
    first_name: {
      type: DataTypes.STRING,      
      allowNull: false,
      validate: {
        notNull: {
          msg: "First Name can not be empty"
        },
        notEmpty: {
          msg: "First Name can not be empty"
        }
      }
    },
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,      
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can not be empty"
        },
        notEmpty: {
          msg: "Password can not be empty"
        },
        len: {
          args: [8],
          msg: "Min. password length is 5"
        }
      }
    },
    email: {
      type: DataTypes.STRING,      
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email can not be empty"
        },
        notEmpty: {
          msg: "Email can not be empty"
        },
        isEmail: {
          msg: "Invalid e-mail address"
        }
      }
    },
    phoneNumber: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    region: DataTypes.STRING,
    company_name: DataTypes.STRING,
    role: DataTypes.STRING,
    company_website: DataTypes.STRING,
    company_industry: DataTypes.STRING,
    team_size: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    admin_status: DataTypes.BOOLEAN,
    active_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Founder',
  });
  User.beforeCreate(instance => {
    let bcrypt = require('bcryptjs');
    let salt = bcrypt.genSaltSync(5);
    let hash = bcrypt.hashSync(instance.password, salt);
    
    instance.password = hash
  })
  return Founder;
};