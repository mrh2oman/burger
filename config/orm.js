// Import connection.js
const connection = require("./connection.js");

// Object Relational Mapper (ORM)
module.exports = {
  //Gets all burgers from DB
  selectAll: function(cb) {
    connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },
  //Adds new burger to DB
  insertOne: function(burger_name, cb) {
    connection.query('INSERT INTO burgers (id, burger_name, devoured, date) VALUES (id, ?, false, CURRENT_TIMESTAMP)', burger_name, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //Updates devoured to true
  updateOne: function(id, cb) {
    connection.query('UPDATE burgers SET devoured = true WHERE id = ?', id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};