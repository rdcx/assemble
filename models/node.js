// grab the things we need
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a schema
var nodeSchema = new Schema({
  name: String,
  ip: String,
  created_at: Date,
  updated_at: Date
});

var Node = mongoose.model('Node', nodeSchema);

// make this available to our users in our Node applications
module.exports = Node;
