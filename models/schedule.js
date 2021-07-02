'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    intensity: DataTypes.STRING,
    UserId: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Users',
        key : 'id'
      }
    },
    ProgramId: {
      type : DataTypes.INTEGER,
      references : {
        model : 'Programs',
        key : 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};