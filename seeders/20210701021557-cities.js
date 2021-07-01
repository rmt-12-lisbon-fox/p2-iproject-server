'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = require('../citydata.json');

    data.forEach(e=>{
      e.createdAt = new Date();
      e.updatedAt = new Date();
    })

    await queryInterface.bulkInsert('Cities', data, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
