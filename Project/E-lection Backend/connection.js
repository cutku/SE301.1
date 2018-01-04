var mysql = require("mysql");

var pool = mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        port     :  3306,
        user     : 'root',
        password : '',
        database : 'e-lection',
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};
