'use strict';
const faker = require('faker')
const {bcryptCreate} = require('../helpers/bcrypt')
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
   const data = []
   for (let i = 0; i <= 10; i++) {
     let fName = faker.name.firstName()
     data.push({
       username: faker.internet.userName(fName),
       email: faker.internet.email(fName),
       password: bcryptCreate(fName),
      //  imageUrl: faker.image.imageUrl(),
       imageUrl: faker.image.imageUrl(null, null, null, true),
       createdAt: new Date(),
       updatedAt: new Date()
     })
   }
     await queryInterface.bulkInsert('Users', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users')
  }
};
