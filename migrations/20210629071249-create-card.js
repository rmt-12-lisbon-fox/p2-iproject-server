'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      banlist_info: {
        type: Sequelize.TEXT
      },
      desc: {
        type: Sequelize.TEXT
      },
      atk: {
        type: Sequelize.INTEGER
      },
      def: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      linkval: {
        type: Sequelize.INTEGER
      },
      linkmarkers: {
        type: Sequelize.TEXT
      },
      scale: {
        type: Sequelize.TEXT
      },
      attribute: {
        type: Sequelize.TEXT
      },
      race: {
        type: Sequelize.TEXT
      },
      archetype: {
        type: Sequelize.TEXT
      },
      card_sets: {
        type: Sequelize.TEXT
      },
      card_images: {
        type: Sequelize.TEXT
      },
      card_images_small: {
        type: Sequelize.TEXT
      },
      card_prices: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  }
};