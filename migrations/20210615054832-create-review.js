'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FounderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Founders',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      InvestorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Investors',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      reviewer: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      investor_role: {
        type: Sequelize.STRING
      },
      investment_stage: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.TEXT
      },
      rating_overall: {
        type: Sequelize.INTEGER
      },
      rating_professionalism: {
        type: Sequelize.INTEGER
      },
      rating_speed: {
        type: Sequelize.INTEGER
      },
      rating_dd_complexity: {
        type: Sequelize.INTEGER
      },
      rating_post_inv_support: {
        type: Sequelize.INTEGER
      },
      rating_founder_friendly: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      likes_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      status: {
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
    await queryInterface.dropTable('Reviews');
  }
};