const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('academy', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate({});

module.exports = sequelize;
