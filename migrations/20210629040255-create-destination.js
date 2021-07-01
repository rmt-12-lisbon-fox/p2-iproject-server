'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      phone_code: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      wiki_url: {
        type: Sequelize.STRING
      },
      flag_url: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.STRING
      },
      timezone: {
        type: Sequelize.STRING
      },
      countryCode:{
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Destinations');
  }
};