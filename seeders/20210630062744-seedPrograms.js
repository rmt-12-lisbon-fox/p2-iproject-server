'use strict';
let fs = require('fs')

module.exports = {
  up:  (queryInterface, Sequelize) => {
    let data = require('./_Programs__202106301325.json')

    return queryInterface.bulkInsert('Programs', data.Programs)
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
