const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");

const Status = sequelize.define("Status", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
  },
  desc: {
    type: DataTypes.STRING(100)
  },
});

module.exports = Status;
