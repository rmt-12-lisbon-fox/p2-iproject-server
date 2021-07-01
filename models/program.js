'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Program.belongsToMany(models.User, {through : models.Schedule})
    }
  };
  Program.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    type: {
      type : DataTypes.STRING,
      allowNull : false
    },
    videoId: {
      type : DataTypes.STRING,
      allowNull : false
    },
    thumbnail: {
      type : DataTypes.STRING,
      allowNull : false
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Program',
  });
  return Program;
};