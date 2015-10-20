'use strict';

var AFApp = angular.module('AFApp', [
	'ui.bootstrap',
	'AFControllers',
	'multiTransclude',
	'AFDirectives'
]);

AFApp.controller('AFAppCtrl', function($scope){
	console.log('AFAppCtrl');
	return;
});

AFApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});