'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('penitipans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_penitipan: {
        type: Sequelize.STRING
      },
      durasi: {
        type: Sequelize.STRING
      },
      biaya: {
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
    await queryInterface.dropTable('penitipans');
  }
};