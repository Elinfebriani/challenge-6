'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('penitipan', [{
      "jenis_penitipan": "penitipan kucing",
      "durasi": "1 jam",
      "biaya": 15000,
      "updatedAt": "2022-04-29T07:21:49.530Z",
      "createdAt": "2022-04-29T07:21:49.530Z"
    },
    {
      "jenis_penitipan": "penitipan anjing",
      "durasi": "1 jam",
      "biaya": 20000,
      "updatedAt": "2022-04-29T07:21:49.530Z",
      "createdAt": "2022-04-29T07:21:49.530Z"
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
