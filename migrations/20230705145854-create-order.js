'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalAmount: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references :{
          model : "Users",
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
    return queryInterface.dropTable('Orders');
  }
};