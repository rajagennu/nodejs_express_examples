'use strict'

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.get( '/', function ( req, res ) {
    let data = {
        message: "hello world",
    };
    res.status( 200 ).send( data );
} );

app.post( '/', function ( req, res ) {
    let data = {
        response: 'You send: ' + req.body.message
    };
    res.status( 200 ).send( data );
} );

module.exports = app;
