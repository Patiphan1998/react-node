const passport = require("passport");
const passportService = require("./service/passport");

const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

const users = require("./controllers/Users");
const cars = require("./controllers/Cars");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.send({ message: "speedcars" });
  });

  app.post("/signin", requireSignin, users.signin);

  app.get("/users",  users.findAll);
  app.post("/users",  users.create);
  // app.post("/users",  users.index);
  app.get("/users/:id", requireAuth, users.findById);
  app.put("/users/:id", requireAuth, users.update);
  app.delete("/users/:id", requireAuth, users.delete);

  app.get("/cars", cars.findAll);
  app.post("/cars", cars.create);
  app.get("/cars/:id", cars.findById);
  app.put("/cars/:id", requireAuth, cars.update);
  app.delete("/cars/:id", requireAuth, cars.delete);
};
