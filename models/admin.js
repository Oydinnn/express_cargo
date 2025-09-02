const sequelize = require('../config/db')
const {DataTypes} = require("sequelize");

const Admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  full_name: {
    type: DataTypes.STRING(50),
  },
  user_name: {
        type: DataTypes.STRING(50),
    },
  password: {
    type: DataTypes.STRING(30)
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
  desc: {
    type: DataTypes.STRING,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_creator: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Admin;
