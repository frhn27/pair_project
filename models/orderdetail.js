'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order)
      OrderDetail.belongsTo(models.Gadget)
    }
  }
  OrderDetail.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    OrderId : DataTypes.INTEGER,
    GadgetId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};