'use strict';
const fs = require("fs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const data = JSON.parse(fs.readFileSync('./data/gadget.json', "utf-8"))
    data.map((el)=>{
     el.createdAt =new Date()
     el.updatedAt =new Date()
     return el
    })
   
    return queryInterface.bulkInsert("Gadgets", data)
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
