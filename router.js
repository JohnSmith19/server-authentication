const Authenticaiton = require("./controller/authentication");

module.exports = function(app) {
  app.post("/signup", Authenticaiton.signup);
};
