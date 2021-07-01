'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Investor.hasMany(models.Review, {foreignKey: 'InvestorId'})
    }
  };
  Investor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name can not be empty"
        },
        notEmpty: {
          msg: "Name can not be empty"
        }
      }
    },
    company_name: DataTypes.STRING,
    region: DataTypes.STRING,
    industry: DataTypes.STRING,
    website_url: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    investor_type: DataTypes.STRING,
    status: DataTypes.STRING,
    requesterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Investor',
  });
  return Investor;
};