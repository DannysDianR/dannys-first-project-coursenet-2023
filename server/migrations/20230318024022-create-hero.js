'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      heroName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      priceBp: {
        type: Sequelize.INTEGER
      },
      priceDm: {
        type: Sequelize.INTEGER
      },
      typeAttack: {
        type: Sequelize.STRING
      },
      atk: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heros');
  }
};