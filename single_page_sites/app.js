const express = require( 'express' );
const app = express();
const path = require( 'path' );
const bodyParser = require( 'body-parser' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.get( '/api', function ( req, res, next ) {
    let data = {
        message: 'Hello world',
    };
    res.status( 200 ).send( data );
} );

app.post( '/api', function ( req, res, next ) {
    let data = req.body;
    res.status( 200 ).send( data );
} );

app.use( '/', express.static( 'app' ) );

app.get( '*', function ( req, res ) {
    res.sendFile( path.join( __dirname + '/app/index.html' ) );
} );

// The * matches every route except for the ones above will be defaulted to send the index.html back to the client. Meaning every route will serve the main index.html. Exactly what we want!


module.exports = app;
