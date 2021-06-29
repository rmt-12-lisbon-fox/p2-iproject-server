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
    }
  };
  Investor.init({
    name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    region: DataTypes.STRING,
    industry: DataTypes.STRING,
    website_url: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    investor_type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Investor',
  });
  return Investor;
};