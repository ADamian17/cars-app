/* SECTION External Modules */
const express = require('express');
const app = express();


const PORT = 3005;


const ctrl = require('./controllers');


app.set('view engine', 'ejs');

app.get('/', ( req, res ) => res.render('home') );

app.use( '/cars', ctrl.car );

app.listen(PORT, () => console.log(`listining at ${PORT}`) );

