// grab the things we need
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId   = mongoose.ObjectId;

// create a schema
var containerSchema = new Schema({
  name: String,
  image: String,
  created: String,
});

// create a schema
var volumeSchema = new Schema({
  location: String,
  description: String,
  activeContainers: String,
});

// create a schema
var portSchema = new Schema({
  number: String,
});

// create a schema
var nodeSchema = new Schema({
  name: String,
  ip: String,
  created_at: Date,
  updated_at: Date,
  containers: [containerSchema],
  volumes: [volumeSchema],
  ports: [portSchema],
});

// the schema is useless so far
// we need to create a model using it
var Node = mongoose.model('Node', nodeSchema);

// make this available to our users in our Node applications
module.exports = Node;
