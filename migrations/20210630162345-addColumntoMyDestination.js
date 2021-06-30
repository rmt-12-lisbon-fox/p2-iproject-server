'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('MyDestinations', 'name', {
        type: Sequelize.STRING
      }),
        await queryInterface.addColumn('MyDestinations', 'description', {
          type: Sequelize.TEXT,
        }),
        await queryInterface.addColumn('MyDestinations', 'imgUrl', {
          type: Sequelize.STRING,
        })
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }

    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('MyDestinations', 'name'),
      await queryInterface.removeColumn('MyDestinations', 'description'),
      await queryInterface.removeColumn('MyDestinations', 'imgUrl')
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
