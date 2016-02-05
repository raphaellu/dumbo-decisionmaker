angular.module('decisionmaker', ['ngRoute', 'ngAnimate'])

.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', function($scope, $route, $routeParams, $location) {
		
	 console.log('Current route name: ' + $location.path());
	

	 $scope.ifLoggedIn = false;

	 $scope.determinePageTitle = function(){
	 	var path = $location.path()
	 	if(path == "/")
	 		return "My Questions";
	 	else if(path == "/answer")
	 		return "Answer Questions";
	 	else if(path == "/ask") 
	 		return "Ask a Question";
	 } 

	 $scope.hideNavFooter = function(){
	 	if ($location.path() == "/login")
	 		return true;
	 	else
	 		return false;
	 }

	 $scope.logOut = function() {
	 	$scope.ifLoggedIn = false;
	 	console.log("logged out");
	 }

	 $scope.logIn = function() {
	 	$scope.ifLoggedIn = true;
	 	console.log("logged in");
	 }

	 // $scope.kickUnlogged = function() {
	 // 	if (!$scope.ifLoggedIn) {
	 		
	 // 	}
	 // }

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
	.when('/ask', {
		templateUrl: 'ask.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'decisionmakerCtrl'
	})
//	 $locationProvider.html5Mode(true);
})
