
angular.module('decisionmaker', ['ngRoute', 'ngAnimate', 'homeController', 'askController', 'answerController', 'singleQController','ngMaterial'])

.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', function($scope, $route, $routeParams, $location) {
		
	 console.log('Current route name: ' + $location.path());
	

	 $scope.ifLoggedIn = false;

	 $scope.determinePageTitle = function(){
	 	var path = $location.path()
	 	if(path == "/")
	 		return "My Questions";
	 	else if(path == "/answer")
	 		return "All Questions";
	 	else if(path == "/ask") 
	 		return "Ask a Question";
	 	else if(path == "/help")
	 		return "Help"
	 	else if(path == "/profile")
	 		return "My Profile"
	 } 

	 $scope.profile = {
	 	"name"	: "Chirag Poolajaranadirsamad",
	 	"image" : "./img/profile4.jpg",
	 	"email" : "chirag@gmail.com",
	 	"password": "petrifiedJS"
	 	}

	 $scope.encryptPW = function(){
	 	var pw = "";
	 	for(i in $scope.profile.password)
	 		pw += "*";
	 	return pw;
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

	$scope.doTheBack = function() {
		console.log("doback")
  		window.history.back();
	};

	 $scope.isActive = function (viewLocation) { 
	 	// console.log("===viewLocation: " + viewLocation + " location.path: " + $location.path());
        return (viewLocation == $location.path());
    };

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
	
	// .when('/about', {
	// 	templateUrl: 'about.html',
	// 	controller: 'decisionmakerCtrl'
	// })
	.when('/help', {
		templateUrl: 'help.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/profile', {
		templateUrl: 'profile.html',
		controller: 'decisionmakerCtrl'
	})
	.when('/questions/:questionId', {
		templateUrl: 'singleQuestion.html',
		controller: 'decisionmakerCtrl'
	})

//	 $locationProvider.html5Mode(true);
})
