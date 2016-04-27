/**
 * Module dependencies.
 */

var models = require('../../models');

exports.name = 'container';
exports.prefix = '/host/:host_id';

exports.create = function(req, res, next){
  var id = req.params.host_id;
  var dockerhost = db.dockerhosts[id];
  var body = req.body;
  if (!dockerhost) return next('route');
  var container = {
      name: body.container.name,
      image: body.container.image
  };
  container.id = db.containers.push(container) - 1;
  dockerhost.containers.push(container);
  res.message('Added container ' + body.container.name);
  res.redirect('/host/' + id);
};
