const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");

const currency_type = sequelize.define("currency_type_id", {
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

module.exports = currency_type;
