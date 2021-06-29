'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsToMany(models.Deck, {through: 'DeckCards'})
    }
  };
  Card.init({
    cardId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    type: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    race: DataTypes.TEXT,
    archetype: DataTypes.TEXT,
    banlist_info: DataTypes.TEXT,
    scale: DataTypes.INTEGER,
    linkval: DataTypes.INTEGER,
    linkmarkers: DataTypes.TEXT,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    attribute: DataTypes.TEXT,
    card_sets: DataTypes.TEXT,
    card_images: DataTypes.TEXT,
    card_images_small: DataTypes.TEXT,
    card_prices: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};