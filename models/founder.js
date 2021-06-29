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
    }
  };
  Founder.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    region: DataTypes.STRING,
    company_name: DataTypes.STRING,
    company_website: DataTypes.STRING,
    company_industry: DataTypes.STRING,
    company_type: DataTypes.STRING,
    founded: DataTypes.INTEGER,
    team_size: DataTypes.INTEGER,
    linkedin_url: DataTypes.STRING,
    admin_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Founder',
  });
  return Founder;
};