const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const Subs = require('../models/subscribers');

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

    // res.redirect('/');
});

module.exports = router;