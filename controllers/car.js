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


module.exports = router;