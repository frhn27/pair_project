'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references :{
          model : "Orders",
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      GadgetId: {
        type: Sequelize.INTEGER,
        references :{
          model : "Gadgets",
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('OrderDetails');
  }
};