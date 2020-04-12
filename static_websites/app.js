const express = require( "express" );
const app = express();

app.use( '/', express.static( 'html' ) );
module.exports = app;
