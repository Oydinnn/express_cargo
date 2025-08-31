const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");

const Client = sequelize.define("client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  full_name: {
    type: DataTypes.STRING(50),
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    is: /^\+998[0-9]{9}$/,
    },
  },
  email: {
    type: DataTypes.STRING(30)
  },
  address: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING(30),
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = Client;
