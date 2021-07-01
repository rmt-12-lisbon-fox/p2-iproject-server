'use strict';
const { hashPassword } = require('../helpers/bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let userPassword1 = hashPassword('admin')
    let userPassword2 = hashPassword('anwar')
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@mail.com',
        password: userPassword1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'anwar@mail.com',
        password: userPassword2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users')
  }
};
