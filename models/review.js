'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User);
    }
  };
  Review.init({
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    comment: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Comment should not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};