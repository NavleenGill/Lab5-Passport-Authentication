/**
 * Created by Owner on 2017-03-08.
 */

var mongoose = require('mongoose');

// this is needed to tell the app this model is for managing user accounts;
// it is not a regular model like book
var plm = require('passport-local-mongoose');

// create the schema. Username and password are automatically included
var accountSchema = new mongoose.Schema({});

// enable plm on this model
accountSchema.plugin(plm);  //account model connected to passport-local-mongoose

// make the model public
module.exports = mongoose.model('Account', accountSchema);