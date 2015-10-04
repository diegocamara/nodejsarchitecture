var cfg = require('_/config');
var log = require('_/log');
var models = require('_/app/models');
var app = require('_/app');
var sequelize = require('sequelize');


models.sequelize.sync().then(function(){
  app.listen(cfg.port, function(){
    console.log('app listening on port', cfg.port);
  });
    log.info('app listening on port', cfg.port);
})
