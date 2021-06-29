'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameMale: {
        type: Sequelize.STRING
      },
      nameFemale: {
        type: Sequelize.STRING
      },
      loveStory: {
        type: Sequelize.STRING
      },
      dateAkad: {
        type: Sequelize.DATE
      },
      addressAkad: {
        type: Sequelize.STRING
      },
      dateReception: {
        type: Sequelize.DATE
      },
      addressReception: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      TamplateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tamplates',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    await queryInterface.dropTable('Invites');
  }
};