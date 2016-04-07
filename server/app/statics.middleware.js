'use strict';

var express = require('express'),
	router = express.Router(),
	path = require('path');

var rootPath = path.join(__dirname, '..', '..');

var publicPath = path.join(rootPath, 'public');
var bowerPath = path.join(rootPath, 'bower_components');
var browserPath = path.join(rootPath, 'browser');


router.use(express.static(publicPath));
router.use(express.static(bowerPath));
router.use(express.static(browserPath));

module.exports = router;