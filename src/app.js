// var angular = require('angular')
//   , mocks	= require('angular-mocks');

var angular = require('angular');
	mocks   = require('angular-mocks');

angular.module('myApp',[])
	
	.controller('MainCtrl', function($scope) {
	    $scope.text = 'Hello World!';
	});