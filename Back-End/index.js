const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const path = require("path");
const fileUpload = require("express-fileupload");
const config = require("./config");
const routes = require("./routes");
const PORT = 3009;

const multer = require("multer");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: "*/*" }));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "" }));

app.use(myConnection(mysql, config.dbOptions, "pool"));
routes(app);

app.listen(PORT, () => {
  console.log("ready server on http://localhost:" + PORT);
});

app.use(express.static(path.join(__dirname, "public")));

app.post("/register", (req, res, next) => {
  const user = req.body;
  console.log(user);
  const post = [
    user.user_type,
    user.name,
    user.username,
    user.password,
    user.image,
    user.phone,
    user.facebook,
    user.line,
    user.doc_date,
    user.doc_time,
  ];
  req.getConnection(function (err, connection) {
    connection.query(
      "select username from user where username=?",
      [user.username],
      function (err, results) {
        if (results.length > 0 && results != "") {
          res.send("ชื่อผู้ใช้ซ้ำกัน กรุณาเปลี่ยนชื่อผู้ใช้");
        } else if (user.name == 0 && user.name == "") {
          res.send("กรุณากรอก ชื่อ - นามสกุล !! ");
        } else if (user.username == 0 && user.username == "") {
          res.send("กรุณากรอก ชื่อผู้ใช้งาน !!");
        } else if (user.password == 0 && user.password == "") {
          res.send("กรุณากรอก password !!");
        } else {
          connection.query("insert into user set ? ", user, (err, results) => {
            if (!err) {
              res.send("สมัครสมาชิกสำเร็จ !!");
            } else {
              console.log(err);
            }
          });
        }
      }
    );
  });
});

app.post("/sale_post", (req, res, next) => {
  const car = req.body;
  // const user_id = req.user.id;
  console.log(car);
  const post = [
    car.id,
    car.brand,
    car.generation,
    car.car_makeover,
    car.model_details,
    car.engine_size,
    car.car_type,
    car.gear_system,
    car.number_of_seats,
    car.Mileage,
    car.color,
    car.address,
    car.image1,
    car.image2,
    car.image3,
    car.image4,
    car.image5,
    car.price,
    car.id_type,
    car.fuel,
    car.registration_year,
    car.status,
    car.img_registration_book,
    car.img_id_card,
    car.seller_nameType,
    car.seller_facebookType,
    car.seller_lineType,
    car.seller_phoneType,
    car.user_id,
    car.doc_date,
    car.doc_time,
  ];
  req.getConnection(function (err, connection) {
    connection.query(
      "select id from car where id=?",
      [car.id],
      function (err, results) {
        if (results.length > 0 && results != "") {
          res.send("รหัสรถซ้ำกัน !!");
        } else if (car.brand == 0 && car.brand == "") {
          res.send("กรุณาเลือกยี่ห้อรถ !! ");
        } else if (car.generation == 0 && car.generation == "") {
          res.send("กรุณาเลือกรุ่นรถ !! ");
        } else if (car.engine_size == 0 && car.engine_size == "") {
          res.send("กรุณาระบุขนาดเครื่องยนต์ !! ");
        } else if (car.car_type == 0 && car.car_type == "") {
          res.send("กรุณาเลือกประเภทรถ !! ");
        } else if (car.gear_system == 0 && car.gear_system == "") {
          res.send("กรุณาเลือกระบบเกียร์ !! ");
        } else if (car.Mileage == 0 && car.Mileage == "") {
          res.send("กรุณาระบุเลขไมล์ (กม.) !! ");
        } else if (car.fuel == 0 && car.fuel == "") {
          res.send("กรุณาระบุเชื้อเพลิง !! ");
        } else if (car.price == 0 && car.price == "") {
          res.send("กรุณาระบุราคาที่จะขาย !! ");
        } else {
          connection.query("insert into car set ? ", car, (err, results) => {
            if (!err) {
              res.send("โพสต์ขายรถสำเร็จ !!");
            } else {
              console.log(err);
            }
          });
        }
      }
    );
  });
});

/////////////////////////////////////////////////////////////////////////

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'upload/images')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage })
console.log(upload);

app.use("/file", express.static("upload/images"));

app.post("/upload", upload.single("file"),function (req, res) {

  console.log(req.file);
  res.json({
    success: true,
    file_url: `http://localhost:3009/file/${req.file.filename}`,
  });

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

