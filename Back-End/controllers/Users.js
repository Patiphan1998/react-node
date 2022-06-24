const jwt = require("jwt-simple");
const config = require("../config");
const moment = require("moment");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      user_type: user.user_type,
      name: user.name,
      username: user.username,
      image: user.image,
      phone: user.phone,
      facebook: user.facebook,
      line: user.line,
      iat: timestamp,
    },
    config.secret
  );
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

exports.findAll = (req, res, next) => {
  req.getConnection((err, connection) => {
    if (err) return next(err);

    var sql = "select * from user where (name like ? or username like ?)";
    var params = "%" + req.query.term + "%";
    connection.query(sql, [params, params], (err, results) => {
      if (err) return next(err);
      res.send(results);
    });
  });
};

// exports.findCount = (req, res, next) => {
//   req.getConnection((err, connection) => {
//     if (err) return next(err);

//     var sql = "select COUNT(*) FROM";
//     var res = mysql_fetch_array(sql);
//     connection.query(sql, res,[params, params], (err, results) => {
//       if (err) return next(err);
//       res.send(res);
//     });
//   });
// };

exports.findById = (req, res, next) => {
  var id = parseInt(req.params.id);
  req.getConnection((err, connection) => {
    if (err) return next(err);
    connection.query("select * from user where id=?", [id], (err, row) => {
      if (err) return next(err);
      res.send(row[0]);
    });
  });
};

exports.create = (req, res, next) => {
  var { body } = req;
  var post = {
    user_type: body.user_type,
    name: body.name,
    username: body.username,
    password: body.password,
    doc_date: moment().format("YYYY-MM-DD"),
    doc_time: moment().format("HH:mm"),
  };

  req.getConnection(function (err, connection) {
    connection.query(
      "select username from user where username=?",
      [post.username],
      function (err, results) {
        if (err) return next(err);

        if (results.length > 0) {
          res.send({
            status: 201,
            message: "ชื่อผู้ใช้ซ้ำกัน กรุณาเปลี่ยนชื่อผู้ใช้",
          });
        } else {
          connection.query("insert into user set ? ", post, (err, results) => {
            if (err) return next(err);
            res.send(results);
          });
        }
      }
    );
  });
};

exports.update = (req, res, next) => {
  var id = parseInt(req.params.id);
  var { body } = req;

  var post = {
    user_type: body.user_type,
    name: body.name,
    image: body.image,
    username: body.username,
    password: body.password,
    phone: body.phone,
    facebook: body.facebook,
    line: body.line,
  };

  req.getConnection(function (err, connection) {
    connection.query(
      "select * from user where username=?",
      [post.username],
      function (err, results) {
        if (err) return next(err);

        var isUpdate = false;
        if (results.length > 0) {
          if (results[0].id !== id) {
            res.send({ status: 201, message: "ชื่อผู้ใช้ซ้ำกัน" });
          } else {
            isUpdate = true;
          }
        } else {
          isUpdate = true;
        }

        if (isUpdate) {
          connection.query(
            "update user set ? where id=?",
            [post, id],
            function (err, results) {
              if (err) return next(err);
              res.send(results);
            }
          );
        }
      }
    );
  });
};

exports.delete = (req, res, next) => {
  var id = parseInt(req.params.id);
  req.getConnection((err, connection) => {
    if (err) return next(err);
    connection.query("delete from user where id=?", [id], (err, results) => {
      if (err) return next(err);
      res.send(results);
    });
  });
};
