'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penitipan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  penitipan.init({
    jenis_penitipan: DataTypes.STRING,
    durasi: DataTypes.STRING,
    biaya: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'penitipan',
  });
  return penitipan;
};