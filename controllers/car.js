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


// New Car

router.get('/new', ( req, res ) => res.render('car/new') );

router.post('/addcar', ( req, res ) => {
    req.body._id = db.Car.length;

    db.Car.push(req.body);

    res.redirect('/cars');
});

// Show 
router.get('/:carid', (req, res) => {

    const id = req.params.carid;

    const context = {
        car: db.Car[id]
    };

    res.render('car/show', context );
});


router.delete('/:id/delete', ( req, res ) => {
    const id = req.params.id;

    if ( db.Car.length === 1 ) {
        db.Car.pop();
    } else {
        db.Car.splice( id, 1 );
    }

    res.redirect('/cars');
});


module.exports = router;