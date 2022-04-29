'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      "nama_hewan": "kucing",
      "jenis": "anggora",
      "umur": "1 tahun",
      "id_penitipan": 1,
      "updatedAt": "2022-04-29T08:04:47.405Z",
      "createdAt": "2022-04-29T08:04:47.405Z"
    },
    {
      "nama_hewan": "anjing",
      "jenis": "helder",
      "umur": "2 tahun",
      "id_penitipan": 2,
      "updatedAt": "2022-04-29T08:04:47.405Z",
      "createdAt": "2022-04-29T08:04:47.405Z"
    }
    ], {});
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
