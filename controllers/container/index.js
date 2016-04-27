/**
 * Module dependencies.
 */

var Container = require('../../models/container');

exports.engine = 'ejs';

exports.before = function(req, res, next){
  var container = db.containers[req.params.container_id];
  if (!container) return next('route');
  req.container = container;
  next();
};

exports.show = function(req, res, next){
  res.render('show', { container: req.container });
};

exports.edit = function(req, res, next){
  res.render('edit', { container: req.container });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.container.name = body.container.name;
  req.container.image = body.container.image;
  res.message('Information updated!');
  res.redirect('/container/' + req.container.id);
};
