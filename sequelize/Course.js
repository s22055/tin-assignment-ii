const { DataTypes } = require('sequelize');
const connection = require('./connection');

const Course = connection.define('course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    min: 1,
    max: 63,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    min: 1,
    max: 255,
    allowNull: false,
  },
  launch_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Course;
