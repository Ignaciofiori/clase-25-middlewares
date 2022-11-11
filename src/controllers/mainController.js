const { render } = require("ejs");
const path = require("path");


const controlador = {
  index: (req, res) => {
    res.render('index');
  },
  admin: (req,res) => {
    res.render("admin", {user : req.user})
  }
}
module.exports = controlador;