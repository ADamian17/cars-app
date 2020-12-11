const express = require('express');
const models = require('../models');
const router = express.Router();

const db = require('../models'); 

// NOTE Index All cars 
router.get( '/', (req, res) => {
    const context = {
        cars: db.Car
    };

    res.render('car/index', context );
} );

// Show 
router.get('/:carid', (req, res) => {

    const id = req.params.carid;

    const context = {
        car: db.Car[id]
    };

    res.render('car/show', context );
}); 


module.exports = router;