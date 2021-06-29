'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Founders', {
      fields: ['email'],
      type: 'unique',
      name: 'email_unique_constraint'
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Founders', 'email_unique_constraint', {
      fields: ['email'],
      type: 'unique',
      name: 'email_unique_constraint'
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
