'use strict';

var router = require('express').Router();

var HttpError = require('../utils/HttpError');

router.use(HttpError(404).middleware());

router.use(function (err, req, res, next) {
	err.status = err.status || 500;
	console.error(err.stack);
	var html = "SORRY GUYS!!!!!!!!!! MUAAAHAHAHAHAHAHAHAHAH";
	res.status(err.status).send(html);
});

module.exports = router;