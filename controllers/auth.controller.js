const { User } = require("../models");
const passport = require("../lib/passport");

module.exports = {
  register: async (req, res) => {
    try {
      await User.register(req.body);
      res.redirect("/login");
    } catch (err) {
      res.json(err);
    }
  },
  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  whoami: (req, res) => {
    /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
    res.render("profile", req.user.dataValues);
  },
};
