'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyDestination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyDestination.belongsTo(models.User,{
        foreignKey: 'UserId'
      });
      // MyDestination.belongsTo(models.Destination,{
      //   foreignKey: 'DestinationId'
      // });
    }
  };
  MyDestination.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MyDestination',
  });
  return MyDestination;
};