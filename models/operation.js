const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");
const Admin = require('./admin')
const Order = require("./order")

const Operation = sequelize.define("operation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  operation_date: {
    type: DataTypes.DATEONLY,
  },
  desc: {
    type: DataTypes.STRING,
  },

});

Admin.belongsToMany(Order, { through: Operation});
Order.belongsToMany(Admin, {through: Operation})



module.exports = Operation;
