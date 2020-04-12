const express = require( 'express' );
const path = require( 'path' );
const app = express();

// path module is a built in Node module that provides 
// a way of working with files and directories. 

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'jade' );

app.get( '/', function ( req, res, next ) {
    res.render( 'index', { title: 'Hello World!' } );
} );
// .get method has two args. First a route and then a callback
// function which will invoke when route called. 




module.exports = app;
