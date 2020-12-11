/* SECTION External Modules */
const express = require('express');
const methodOverRide = require('method-override');

const app = express();


const PORT = 3005;


const ctrl = require('./controllers');


app.set('view engine', 'ejs');


// SECTION MIDDLEWARE
app.use( express.urlencoded({ extended: true }) );

app.use( methodOverRide('_method') );



app.get('/', ( req, res ) => res.render('home') );

app.use( '/cars', ctrl.car );

app.listen(PORT, () => console.log(`listining at ${PORT}`) );

