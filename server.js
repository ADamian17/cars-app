/* SECTION External Modules */
const express = require('express');
const methodOverRide = require('method-override');

const app = express();



/* SECTION Ixternal Modules */
const ctrl = require('./controllers');

/* SECTION PORT */
const PORT = 3005;

/* SECTION view engine config */
app.set('view engine', 'ejs');


/* SECTION MIDDLEWARE */
app.use( express.urlencoded({ extended: true }) ); // for parsing application/x-www-form-urlencoded

app.use( methodOverRide('_method') );


/* SECTION Routes */
/* Home */
app.get('/', ( req, res ) => res.render('home') );

/* Car Routes*/
app.use( '/cars', ctrl.car );

/* SECTION server */
app.listen(PORT, () => console.log(`listining at ${PORT}`) );
