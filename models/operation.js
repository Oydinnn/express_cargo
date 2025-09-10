const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");
const Admin = require('./admin')
const Order = require("./order")
const Client = require("./client")

const Operation = sequelize.define("operation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  product_link: { 
    type: DataTypes.STRING 
  },  
  sum: { 
    type: DataTypes.INTEGER 
  },
  operation_date: {
    type: DataTypes.DATEONLY,
  },
  desc: {
    type: DataTypes.STRING,
  },
  adminId: { type: DataTypes.INTEGER },
  orderId: { type: DataTypes.INTEGER }

});

Admin.belongsToMany(Order, { through: Operation});
Order.belongsToMany(Admin, {through: Operation})

Operation.belongsTo(Client, { foreignKey: "client_id" });
Client.hasMany(Operation, { foreignKey: "client_id" });



module.exports = Operation;
