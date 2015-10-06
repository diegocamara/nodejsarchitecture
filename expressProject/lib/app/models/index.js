"use strict";

var loader = require('../../util/loader');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'test';
var config = require('./databaseconfig.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var fs = require('fs');
var db = {};

loader(__dirname, function(file){
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
