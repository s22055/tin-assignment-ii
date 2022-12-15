const { DataTypes } = require('sequelize');
const connection = require('./connection');
const Course = require('./Course');

const Module = connection.define('module', {
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
  course_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Course,
        key: 'id',
    }
  }
});

Course.hasMany(Module, { foreignKey: 'course_id' });

module.exports = Module;
