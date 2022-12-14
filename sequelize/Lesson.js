const { DataTypes } = require('sequelize');
const connection = require('./connection');
const Module = require('./Module');

const Lesson = connection.define('lesson', {
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
  module_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Module,
      key: 'id',
    },
  },
});

Lesson.hasOne(Lesson, { as: 'parent', foreignKey: 'next_lesson_id' });

module.exports = Lesson;
