var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'INSERT HOST HERE',
  user            : 'INSERT USER NAME HERE',
  password        : 'INSERT PASSWORD HERE',
  database        : 'INSERT DATABASE HERE'
});

module.exports.pool = pool;
