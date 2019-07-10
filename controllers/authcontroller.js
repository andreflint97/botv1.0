var path = require("path");
var exports = module.exports = {}

exports.signin = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}

exports.home = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
}


exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/index');
  });

}