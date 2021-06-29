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
    const cards = require('../data/ygoproAPI.json').data
    let dataClean = cards.map(ele => {
      ele.cardId = ele.id
      try {
        ele.card_sets = ele.card_sets.map(e => e.set_code).join(', ')
      } catch {
        ele.card_sets = null
      }
      try {
        ele.banlist_info = ele.banlist_info.ban_tcg
      } catch {
        ele.banlist_info = null
      }
      try{
        ele.linkmarkers = ele.linkmarkers.join(', ')
      }catch{
        ele.linkmarkers = null
      }
      ele.card_images_small = ele.card_images[0].image_url_small
      ele.card_images = ele.card_images[0].image_url
      ele.card_prices = ele.card_prices[0].tcgplayer_price
      ele.createdAt = new Date()
      ele.updatedAt = new Date()

      delete ele.id
      return ele
    })

    try{
      await queryInterface.bulkInsert('Cards', dataClean);
    } catch(err) {
      // delete err.sql
      console.log(err)
      // console.log(err.message)
      // console.log(Object.keys(err))
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards');

  }
};
