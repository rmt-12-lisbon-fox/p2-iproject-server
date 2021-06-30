'use strict';
let fs = require('fs')

module.exports = {
  up:  (queryInterface, Sequelize) => {
    let data = require('./_Programs__202106301325.json')
    console.log(data, `ini data json`)

    return queryInterface.bulkInsert('Programs', data.Programs)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
