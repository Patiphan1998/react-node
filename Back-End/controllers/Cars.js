const moment = require("moment");

exports.findAll = (req, res, next) => {
  req.getConnection((err, connection) => {
    if (err) return next(err);
    var sql = "select * from car where (brand like ? or generation like ? )";
    var params = "%" + req.query.term + "%";
    connection.query(sql, [params, params], (err, results) => {
      if (err) return next(err);
      res.send(results);
    });
  });
};

exports.findById = (req, res, next) => {
  var id = parseInt(req.params.id);
  req.getConnection((err, connection) => {
    if (err) return next(err);
    connection.query("select * from car where id=?", [id], (err, results) => {
      if (err) return next(err);
      res.send(results[0]);
    });
  });
};

exports.create = (req, res, next) => {
  var { body } = req;
  var post = {
    brand: body.brand,
    generation: body.generation,
    car_makeover: body.car_makeover,
    model_details: body.model_details,
    year: body.year,
    engine_size: body.engine_size,
    car_type: body.car_type,
    gear_system: body.gear_system,
    number_of_seats: body.number_of_seats,
    Mileage: body.Mileage,
    color: body.color,
    address: body.address,
    image1: "http://localhost:3009/file/1616988792439-1.jpg",
    image2: "http://localhost:3009/file/1616988792439-1.jpg",
    image3: "http://localhost:3009/file/1616988792439-1.jpg",
    image4: "http://localhost:3009/file/1616988792439-1.jpg",
    image5: "http://localhost:3009/file/1616988792439-1.jpg",
    price: body.price,
    id_type: "0",
    fuel: body.fuel,
    registration_year: body.registration_year,
    status: "1",
    // img_registration_book: body.image6,
    // img_id_card: body.image7,
    doc_date: moment().format("YYYY-MM-DD"),
    doc_time: moment().format("HH:mm"),
    user_id: body.user_id,
    seller_name:body.seller_name,
    seller_phone:body.seller_phone,
    seller_facebook:body.seller_facebook,
    seller_line:body.seller_line,

  };

  req.getConnection(function (err, connection) {
    connection.query(
      "select id from car where id=?",
      [post.id],
      function (err, results) {
        if (err) return next(err);

        if (results.length > 0) {
          res.send({ status: 201, message: "รหัสรถซ้ำกัน" });
        } else {
          connection.query("insert into car set ? ", post, (err, results) => {
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
    brand: body.brand,
    generation: body.generation,
    car_makeover: body.car_makeover,
    model_details: body.model_details,
    year: body.year,
    engine_size: body.engine_size,
    car_type: body.car_type,
    gear_system: body.gear_system,
    number_of_seats: body.number_of_seats,
    Mileage: body.Mileage,
    color: body.color,
    address: body.address,
    // image1: body.image1,
    // image2: body.image2,
    // image3: body.image3,
    // image4: body.image4,
    // image5: body.image5,
    price: body.price,
    id_type: body.id_type,
    fuel: body.fuel,
    registration_year: body.registration_year,
    status: body.status,
    // img_registration_book: body.image6,
    // img_id_card: body.image7,
    doc_date: moment().format("YYYY-MM-DD"),
    doc_time: moment().format("HH:mm"),
    // user_id: body.user_id,
    seller_name:body.seller_name,
    seller_phone:body.seller_phone,
    seller_facebook:body.seller_facebook,
    seller_line:body.seller_line,
  };

  req.getConnection(function (err, connection) {
    connection.query(
      "select id from car where id=?",
      [post.id],
      function (err, results) {
        if (err) return next(err);

        var isUpdate = false;
        //Check Duplicat car id_car
        if (results.length > 0) {
          if (results[0].id !== id) {
            res.send({ status: 201, message: "car id is Duplicate" });
          } else {
            isUpdate = true;
          }
        } else {
          isUpdate = true;
        }

        if (isUpdate) {
          connection.query(
            "update car set ? where id=?",
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
    connection.query("delete from car where id=?", [id], (err, results) => {
      if (err) return next(err);
      res.send(results);
    });
  });
};
