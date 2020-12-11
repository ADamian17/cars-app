/* SECTION External Modules */
const express = require('express');
const app = express();


const PORT = 3005;


app.get('/', ( req, res ) => res.send('Welcome SEI') );

app.listen(PORT, () => console.log(`listining at ${PORT}`) );

