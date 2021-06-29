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
    }
  };
  Review.init({
    FounderId: DataTypes.INTEGER,
    InvestorId: DataTypes.INTEGER,
    reviewer: DataTypes.STRING,
    title: DataTypes.STRING,
    investor_role: DataTypes.STRING,
    investment_stage: DataTypes.STRING,
    review: DataTypes.TEXT,
    rating_overall: DataTypes.INTEGER,
    rating_professionalism: DataTypes.INTEGER,
    rating_speed: DataTypes.INTEGER,
    rating_dd_complexity: DataTypes.INTEGER,
    rating_post_inv_support: DataTypes.INTEGER,
    rating_founder_friendly: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    likes_id: DataTypes.ARRAY(DataTypes.INTEGER),
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};