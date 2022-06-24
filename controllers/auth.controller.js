const { User } = require("../models");
const passport = require("../lib/passport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: async (req, res) => {
    try {
      await User.register(req.body);
      res.redirect("/login");
    } catch (err) {
      res.json(err);
    }
  },
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
