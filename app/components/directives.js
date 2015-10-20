'use strict';

var paperTouchDirectives = angular.module("paperTouchDirectives", ['multiTransclude']);

paperTouchDirectives.directive("pt-site", function(multiTransclude){
	debug;
	console.log('pt-site directive');
	return{
		scope : {},
		transclude : true,
		template : `
		<div>
			<header transclude-id="site-he"></header>
			<nav transclude-id="main-nav"></nav>
			<main transclude-id="content-area"></main>
		</div>`,
		link : function(scope, elem, attr, ctrl, transclude){
			console.log('link function!!');
			multiTransclude.transclude(elem, transclude);
		}
	}
});