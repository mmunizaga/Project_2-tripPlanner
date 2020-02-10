require("dotenv").config();
require("./config/mongodb");

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const path = require("path");
// const flash = require("connect-flash")

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
      cookie: { maxAge: 60000 },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60
      }),
      saveUninitialized: true,
      resave: true
    })
  );
  
  app.locals.site_url = process.env.PORT;

// Getting/Using router(s)
const basePageRouter = require("./routes/index");
app.use("/", basePageRouter);

// const authRouter = require("./routes/auth");
// app.use("/", authRouter);

// const dashboardRouter = require("./routes/dashboard");
// app.use("/", dashboardRouter);

app.listen(process.env.PORT, function(){
    console.log(`http://localhost:${process.env.PORT}`)
});

module.exports = app;