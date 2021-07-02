'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InviteMusics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InviteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Invites',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      MusicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Music',
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
    await queryInterface.dropTable('InviteMusics');
  }
};