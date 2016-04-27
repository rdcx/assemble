// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var containerSchema = new Schema({
  name: String,
  image: String,
  created: String
});

// the schema is useless so far
// we need to create a model using it
var Container = mongoose.model('Container', containerSchema);

// make this available to our users in our Node applications
module.exports = Container;
