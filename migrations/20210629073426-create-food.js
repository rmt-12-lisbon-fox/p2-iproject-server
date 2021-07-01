'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      fdcId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      protein: {
        type: Sequelize.FLOAT
      },
      energy: {
        type: Sequelize.FLOAT
      },
      fat: {
        type: Sequelize.FLOAT
      },
      cholesterol: {
        type: Sequelize.FLOAT
      },
      carbohydrate: {
        type: Sequelize.FLOAT
      },
      sugars: {
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
    await queryInterface.dropTable('Food');
  }
};