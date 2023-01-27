const conn = require('../configuration/mySQLConnection');

exports.message = async(req, res, next) => {
 
  try {
    // var param = req.body;
    var sql = `select * from category`;

    // db is global variable
    conn.query(sql, (err, data) => {
        if (err) throw new SyntaxError(err);
        res.status(200).json({ 'auth': true, 'data': data });
    });
  } catch (err) {
      res.status(400).json({ 'auth': false, 'data': err.message });
  }
}
