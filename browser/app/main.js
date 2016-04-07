'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/auth/:provider', function () {
		window.location.reload();
	});
});

// This is to prevent user being "logged out" on page refresh
app.run(function (Auth) {
	Auth.refreshMe();
});