/**
 * Module dependencies.
 */

var Node = require('../../models/node');

exports.before = function(req, res, next){
  var id = req.params.node_id;
  if (!id) return next();
  // pretend to query a database...
  process.nextTick(function(){
      Node.findOne({ _id: id }, function(err, node) {
          req.node = node;
          // cant find that host
          if (!req.node) return next('route');
          // found it, move on to the routes
          next();
      });
  });
};

exports.list = function(req, res, next){
    Node.find({}, function(err, nodes) {
        res.render('list', { nodes: nodes });
    });
};

exports.edit = function(req, res, next){
  res.render('edit', { node: req.node });
};

exports.add = function(req, res, next){
  res.render('add');
};

exports.create = function(req, res, next){
  var body = req.body;
  var node = new Node({
      name: body.node.name,
      ip: body.node.ip
  });
  console.log(node);
  node.save(function(err){
      if (err) throw err;
      res.message('Information updated!');
      res.redirect('/node/' + node._id);
  });
};

exports.show = function(req, res, next){
  res.render('show', { node: req.node });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.node.name = body.node.name;
  res.message('Information updated!');
  res.redirect('/host/' + req.node.id);
};
