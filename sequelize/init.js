const connection = require('./connection');
const Lesson = require('./Lesson');

connection.sync().then(
  () => {
    console.log('db synced');
  },
  (err) => {
    console.dir(err);
  }
);
