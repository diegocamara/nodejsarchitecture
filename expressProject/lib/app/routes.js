var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.get('/', controllers.index);

module.exports = router;
