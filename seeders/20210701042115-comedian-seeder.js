'use strict';

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
    return queryInterface.bulkInsert('Comedians', [
      {
        name: 'Greer Barnes',
        country: 'U.S.',
        imgUrl: 'http://www.standupny.com/wp-content/uploads/2015/10/95-1000x550.jpg',
        ytUrl: 'https://www.youtube.com/embed/-6joN5Wz3lk',
        birthDate: '1964-01-01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Louis C.K.',
        country: 'U.S.',
        imgUrl: 'https://vanyaland.com/wp-content/uploads/2016/07/Louis-ck.jpg',
        ytUrl: 'https://www.youtube.com/embed/X0IV_ZB9CDs',
        birthDate: '1967-09-12',
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
  }
};
