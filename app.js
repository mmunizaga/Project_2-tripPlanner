require("dotenv").config();
require("./config/mongodb");
require("./helpers/hbs");

// KEY unsplash: a9b4eb0f30174b3fe25d5e437111b3802f0d89d1d39a541b0a4012727844bdeb

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const path = require("path");

// initial config
app.set("view engine", "hbs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static("public"));
hbs.registerPartials(path.join(__dirname, "views/partial"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // cookie: { maxAge: 60000000 },
    // store: new MongoStore({
    //   mongooseConnection: mongoose.connection,
    //   ttl: 24 * 60 * 60
    // }),
    saveUninitialized: true,
    resave: true
  })
);
// CUSTOM MIDDLEWARE
// check if user is logged in... 
// usecases : conditional display in hbs templates
// WARNING: this function must be declared AFTER the session setup
// WARNING: this function must be declared BEFORE app.use(router(s))
function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null; 
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

app.use(checkloginStatus);


  
  app.locals.site_url = process.env.PORT;

// Getting/Using router(s)
const basePageRouter = require("./routes/index");
app.use("/", basePageRouter);

const authRouter = require("./routes/auth");
app.use("/", authRouter);

const dashboardRouter = require("./routes/dashboard");
app.use("/", dashboardRouter);

const axiosRouter = require("./routes/axiosCalls");
app.use("/", axiosRouter)

app.listen(process.env.PORT, function(){
    console.log(`http://localhost:${process.env.PORT}`)
});

module.exports = app;