'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hewan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hewan.associate = function (models) {
        //association can be defined here
        hewan.belongsTo(models.penitipan, {
          foreignKey: 'id_penitipan'
        })
      }
    }
  }
  hewan.init({
    id_penitipan: DataTypes.INTEGER,
    nama_hewan: DataTypes.STRING,
    jenis: DataTypes.STRING,
    umur: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'hewan',
  });


  return hewan;
};