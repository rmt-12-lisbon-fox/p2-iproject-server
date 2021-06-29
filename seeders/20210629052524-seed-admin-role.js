'use strict';
require('dotenv').config()
let hashPassword = require('../helpers/passwordHashingSeeder.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Founders', [{
      first_name: "Admin",
      last_name: "User",
      username: "admin",
      email: "rateyourinvestor@gmail.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "Admin, Rate Your Investor",
      phoneNumber: 6281319023264,
      profilePic: '',
      region: 'Southeast Asia',
      company_name: 'Rate Your Investor',
      company_website: '',
      company_industry: '',
      team_size: '1-20',
      linkedin_url: '',
      admin_status: true,
      active_status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Founders', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
