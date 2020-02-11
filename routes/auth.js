const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// SIGNUP

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const avatar = req.body.avatar;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    userModel.findOne({"email": email})
    .then(dbRes => {
        if(dbRes){
            res.render("auth/signup", {
                errorMessage: "The email already exists!"
            });
            return;
        }

        userModel.create({
            username,
            lastname,
            email,
            password: hashPass,
            avatar
        })
        .then((user) => {
            req.session.currentUser = user;
            res.redirect("/tripPage");
        })
        .catch(error => {
            console.log(error);
        })
    })
    .catch(error => {
        next(error);
    });

    if(!username||!lastname||!email||!password){
        res.render("auth/signup",{
            errorMessage: "You have information missing"
        });
        return;
    }
});

// SIGNIN

router.get("/signin", (req, res) => {
    res.render("auth/signin");
  });

router.post("/signin", (req, res, next) => {
    const theEmail = req.body.email;
    const thePassword = req.body.password;

    if(!theEmail||!thePassword){
        res.render("auth/signin",{
            errorMessage: "Please enter both, email and password to signin"
        });
        return;
    }

    userModel.findOne({"email": theEmail})
    .then(dbRes => {
        if(!dbRes) {
            res.render("auth/signin", {
                errorMessage: "Incorrect email or password"
            });
            return;
        }
        if(bcrypt.compareSync(thePassword, dbRes.password)){
            req.session.currentUser = dbRes;
            res.redirect("/tripPage");
        } else {
            res.render("auth/signin", {
                errorMessage: "Incorrect email or password"
            });
        }
    })
    .catch(error => {
        next(error);
    })
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      res.redirect("/");
    });
  });

module.exports = router;