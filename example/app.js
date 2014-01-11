require('./../index.js');
var __ = require('underscore');

var getCatsQuery = require('./query.sql');
var queryWithParameters = __.template(getCatsQuery, {color: 'red'});

console.log(queryWithParameters);