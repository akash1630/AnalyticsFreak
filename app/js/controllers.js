'use strict';

var AFControllers = angular.module("AFControllers", [
		'ui.bootstrap'
	]);


AFControllers.controller("AFHeaderCtrl", [ '$scope', '$modal', function($scope, $modal) {
	$scope.animationsEnabled = true;

	$scope.open = function (modaltype) {

		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'login.html',
		  controller: 'ModalInstanceCtrl',
		  windowClass: 'login-modal-class'
		});
	}

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};
}]);

AFControllers.controller('loginModalInstanceCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
	
	$scope.ok = function () {
		$modalInstance.dismiss('ok');
	};

	$scope.cancel = function () {
	$modalInstance.dismiss('cancel');
	};
}]);

AFControllers.controller("mainContentCtrl", function($scope) {
  
});

AFControllers.controller("bannerCtrl", function($scope) {
  
});

AFControllers.controller("introCtrl", function($scope) {
	$scope.intro = {
      name: 'intro video',
      lectureLink: 'https://www.youtube.com/embed/Cgm3r-G0cMQ?list=PLAwxTw4SYaPk41og7PER4HBpGciPw6n3x'
    };
});

AFControllers.controller("newsCtrl", function($scope) {
	$scope.news={
		name: 'News Items',
		items: [{
			link : "",
			text : "Student lorem ipsum lorem ipsum"
		},{
			link : "",
			text : "Working Proffessional lorem ipsum"
		},{
			link : "",
			text : "Data Scientist dolor sit amet"
		},{
			link : "",
			text : "Student lorem ipsum lorem ipsum"
		},{
			link : "",
			text : "Working Proffessional lorem ipsum"
		},{
			link : "",
			text : "Data Scientist dolor sit amet"
		}]
	};

	$scope.newsItemClick = function(link){
		
	}
});

AFControllers.controller("howCtrl", function($scope) {
  
});

AFControllers.controller("dropDownCtrl", [ '$scope', '$modal', function($scope, $modal) {
	console.log('dropdownCtrl');
	$scope.isopen = false;
	$scope.status = {
		isopen: false
	};

	$scope.animationsEnabled = true;

	$scope.open = function (modaltype) {

		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'studentModal.html',
		  controller: 'ModalInstanceCtrl',
		  windowClass: 'modal-class'
		});
	}

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};
}]);

AFControllers.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
	
	$scope.ok = function () {
		$modalInstance.dismiss('ok');
	};

	$scope.cancel = function () {
	$modalInstance.dismiss('cancel');
	};
}]);

AFControllers.controller("challengesCtrl", function($scope) {
  
});

AFControllers.controller("videosCtrl", function($scope){
	$scope.intro = {
      name: 'intro lectures',
      lectures: [{
        link: 'shdiTRxTJb4'
      },{
        link: 'shdiTRxTJb4'
      },{
        link: 'shdiTRxTJb4'
      }]
    };

    $scope.getVideoLink = function(link) {
      return 'https://www.youtube.com/embed/' + link;
    };
});


AFControllers.controller("footerCtrl", function($scope) {
  
});


