angular.module('decisionmaker', ['ngRoute', 'ngAnimate', 'homeController', 'askController', 'ngMaterial'])

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
	 	if ($location.path() == "/login" || $location.path() == "/signup")
	 		return true;
	 	else
	 		return false;
	 }

	 $scope.logOut = function() {
	 	$scope.ifLoggedIn = false;
	 	console.log("$scope.ifLoggedIn: " + $scope.ifLoggedIn );
	 }

	 $scope.logIn = function() {
	 	$scope.ifLoggedIn = true;
	 	console.log("$scope.ifLoggedIn: " + $scope.ifLoggedIn );
	 }

	 $scope.kickUnlogged = function() {
	 	if (!$scope.ifLoggedIn) {
	 		$location.path( "/login" );
	 	}
	}

	 // $scope.$on('$locationChangeStart', $scope.kickUnlogged());

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
	.when('/signup', {
		templateUrl: 'signup.html',
		controller: 'decisionmakerCtrl'
	})
	
	.when('/about', {
		templateUrl: 'about.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/help', {
		templateUrl: 'help.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/profile', {
		templateUrl: 'profile.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/singleq', {
		templateUrl: 'singleQuestion.html',
		controller: 'decisionmakerCtrl'
	})

//	 $locationProvider.html5Mode(true);
})
