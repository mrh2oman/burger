var mysql = require("mysql");
var inquire

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "12345",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // queryAllSongs();
  // queryDanceSongs();
});

// function queryAllSongs() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//     console.log("-----------------------------------");
//   });
// }

// function queryDanceSongs() {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });
//
//   // logs the actual query being run
//   console.log(query.sql);
// }

function deleteSong() {
  console.log("Deleting all rock songs...\n");
  var query = connection.query(
    "DELETE FROM songs WHERE ?",
    {
      genre: "classic rock"
    },
    function (err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      readSongs()
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
