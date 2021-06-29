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
      Review.belongsTo(models.Founder, {foreignKey: 'FounderId'})
      Review.belongsTo(models.Investor, {foreignKey: 'FounderId'})
    }
  };
  Review.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    FounderId: DataTypes.INTEGER,
    InvestorId: DataTypes.INTEGER,
    reviewer: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title can not be empty"
        },
        notEmpty: {
          msg: "Title can not be empty"
        }
      }
    },
    investor_role: DataTypes.STRING,
    investment_stage: DataTypes.STRING,
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Review can not be empty"
        },
        notEmpty: {
          msg: "Review can not be empty"
        }
      }
    },
    rating_overall: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Rating can not be empty"
        },
        notEmpty: {
          msg: "Rating can not be empty"
        }
      }
    },
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