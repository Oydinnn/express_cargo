const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");
const Client = require('./client')
const Currency_type = require("./currency_type")

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  order_unique_id: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
  },
  product_link: {
    type: DataTypes.STRING(2000),
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  sum: {
    type: DataTypes.DECIMAL(15, 2),
  },
  truck: {
    type: DataTypes.STRING(30),
  },
  full_name: {
    type: DataTypes.STRING(50),
  },
  desc: {
    type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

Client.hasMany(Order);
Order.belongsTo(Client);

Currency_type.hasMany(Order);
Order.belongsTo(Currency_type);


module.exports = Order;
