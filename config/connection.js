var mysql = require('mysql');
const connection = mysql.createConnection({
    port: 3306,
    host : 'icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'z6dju7jcbjpo6cfs',
    password: 'ojc389z9x4qinm27',
    database : 'gn3eduuqomyc60mo'
})


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     port: 3306,
//     host : 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user : 'n65m91nrhvcxj46e',
//     password: 'nr0xle3xzxbq5x7w',
//     database : 's4oge7xpepkgru1y'
// })