const express = require("express");
const router = express.Router();
const auth = require("./controllers/auth.controller");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, (req, res) => res.render("index"));

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", auth.register);

router.post("/login", auth.login);

router.get("/whoami", restrict, auth.whoami);

module.exports = router;
