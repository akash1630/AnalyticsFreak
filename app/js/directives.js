'use strict';

var AFDirectives = angular.module("AFDirectives", ['multiTransclude']);

AFDirectives.directive("afSite", function(multiTransclude){
	return{
		restrict : 'E',
		scope : {},
		transclude : true,
		template : 
		"<div>" +
			'<header transclude-id="site-head"></header>' +
			'<nav transclude-id="main-nav"></nav>' +
			'<main transclude-id="content-area"></main>' + 
		"</div>",
		link : function(scope, elem, attr, ctrl, transclude){
			console.log('inside link function');
			multiTransclude.transclude(elem, transclude);
		}
	}
});