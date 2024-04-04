const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    // to save data in mongodb
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.post('/authenticate', (req, res) => {
    // console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result)
                res.status(200).json(result);
            else
                res.status(401).json({ message: 'login failed' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes url parameter
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;