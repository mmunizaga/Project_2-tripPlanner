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
const flash = require("connect-flash")

// initial config
app.set("view engine", "hbs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static("public"));
hbs.registerPartials(path.join(__dirname, "views/partial"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


module.exports = app;