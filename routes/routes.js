const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const nodemailer = require('nodemailer');
require('dotenv').config();

const Subs = require('../models/subscribers');
const Users = require('../models/admins');


process.env.SECRET_KEY = 'secret';



//routes ...
router.post('/register', (req, res) => {

    let newUser = new Users({
        user: req.body.user,
        password: req.body.password
    });

    Users.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'failed to register'
            });
        } else {
            res.json({
                success: true,
                msg: 'nice !'
            })
        }

    })
})



router.post('/admin', (req, res) => {

    const user = req.body.user;
    const password = req.body.password;

    Users.getUserById(user, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'user not found'
            });
        }

        Users.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), 'admin', {
                    expiresIn: 604800 // 1 semaine
                });

                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user: {
                        id: user._id,
                        user: user.user
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: "wrong password"
                });
            }
        });
    });

});



router.get('/dashboard', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    res.json({
        user: req.user
    });
})




// candidats ....

router.get('/subscribers', (req, res, next) => {
    Subs.find((err, subs) => {
        res.json(subs);
    })

});

router.post('/addsubscribers', (req, res, next) => {
    let newSubscriber = new Subs({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email,
        campus: req.body.campus,
        motivation: req.body.motivation
    });

    newSubscriber.save((err, result) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);

        } else if (!result) {
            res.status(404).end();

        } else {
            res.status(200).json({
                msg: "bobo is alive",
                datasent: result
            })
        }
    })
});




//message mail ...

router.post('/sendingmail', (req, res) => {

    let newMessage = {
        email: req.body.email,
        message: req.body.message
    }

    //nodemailer trnsporter object !!
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.email,
            pass: process.env.password
        },

    });

    var mailOption = {
        from: '------------Al Jisr-----------',
        to: 'greenchip2.0@gmail.com',
        subject: "un message d'un visiteur",
        text: "un message de " + newMessage.email + "\n" + newMessage.message,
    }


    transporter.sendMail(mailOption, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            alert('message envoyé');
        }
    });

    res.redirect('/');
});

module.exports = router;