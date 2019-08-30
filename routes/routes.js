const express = require('express');
const router = express.Router();

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
    });

    newSubscriber.save((err, result) => {
        if (err) {
            res.status(500).send(err);

        } else if (!result) {
            res.status(404).end();

        } else {
            res.status(200).json({
                msg: "bobo is alive",
                datasent: result
            })
        }
    })
})

module.exports = router;