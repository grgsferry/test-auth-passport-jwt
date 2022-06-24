// Defining requirements and imports
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const passport = require("./lib/passport");
const router = require("./router");

// 1. Setting request body parser
app.use(express.json());
app.use(urlencoded({ extended: false }));

// 2. Setting session handler
app.use(
  session({
    secret: "This is a secret test",
    resave: false,
    saveUninitialized: false,
  })
);

// 3. Setting passport
app.use(passport.initialize());
app.use(passport.session());

// 4. Setting flash
app.use(flash());

// 5. Setting view engine
app.set("view engine", "ejs");

// 6. Setting router
app.use("/", router);

app.listen(3000, () => {
  console.log("App running");
});
