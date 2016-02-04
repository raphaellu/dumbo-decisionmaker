angular.module('decisionmaker', ['ngRoute', 'ngAnimate'])

.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', function($scope, $route, $routeParams, $location) {
		
	 console.log('Current route name: ' + $location.path());
	

	 $scope.determinePageTitle = function(){
	 	var path = $location.path()
	 	if(path == "/")
	 		return "My Questions";
	 	else if(path == "/answer")
	 		return "Answer Questions";
	 } 

	

}])

.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/answer', {
		templateUrl: 'answer.html',
		controller: 'decisionmakerCtrl'
	})

//	 $locationProvider.html5Mode(true);
})
