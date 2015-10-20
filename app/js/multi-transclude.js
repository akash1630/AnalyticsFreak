'use strict';

var multiTransclude = angular.module('multiTransclude', []);

multiTransclude.factory('multiTransclude', function(){
	return{
		transclude : function(elem, transcludeFn){
			transcludeFn(function(clone){
				console.log(clone);
				angular.forEach(clone, function(cloneEl){
					console.log('multiTransclusion function!!');
					var tId = cloneEl.attributes["transclude-to"].value;
					var targetEl = elem.find('[transclude-id = "' + tId + '"]');
					if(targetEl.length){
						targetEl.append(cloneEl);
					} else {
						cloneEl.remove();
						throw new Error('clone element not found!!');
					}
				})
			})
		}
	}
});