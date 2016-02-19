
angular.module('decisionmaker', ['ngRoute', 'ngAnimate', 'homeController', 'askController', 'answerController', 'singleQController', 'profileController', 'ngMaterial'])
// .run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
//     var original = $location.path;
//     $location.path = function (path, reload) {
//         if (reload === false) {
//             var lastRoute = $route.current;
//             var un = $rootScope.$on('$locationChangeSuccess', function () {
//                 $route.current = lastRoute;
//                 un();
//             });
//         }
//         return original.apply($location, [path]);
//     };
// }])



.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', '$http',function($scope, $route, $routeParams, $location, $http) {
		
	 // console.log('Current route name: ' + $location.path());
	console.log("decisionmaker ctrl")

	 $scope.ifLoggedIn = false;
	 // $scope.homeQuestions=[];
	 // $scope.answerQuestions = [];
	 
	 $http.get('../json/allQuestions.json').then(function(res){
      	 $scope.allQuestions = res.data;  
     });
     
     // $http.get('../json/users.json').then(function(res){
     //  	 $scope.user = res.data;  
     // });    
     

	 $scope.determinePageTitle = function(){
	 	var path = $location.path()
	 	if(path == "/")
	 		return "All Questions";
	 	else if(path == "/home")
	 		return "My Questions";
	 	else if(path == "/ask") 
	 		return "Ask a Question";
	 	else if(path == "/help")
	 		return "Help"
	 	else if(path == "/profile")
	 		return "My Profile"
	 	// else if(String(path).includes("/questions/"))
	 		// return ""
	 } 

	 $scope.user = [{
	 	"name"	: "Super User",
	 	"image" : "./img/profile4.jpg",
	 	"email" : "superuser@ucsd.edu",
	 	"password": "superuser"
	 },
	 {
	 	"name"	: "Chirag Poolajaranadirsamad",
	 	"image" : "./img/profile4.jpg",
	 	"email" : "chirag@gmail.com",
	 	"password": "petrifiedJS"
	 }]


	 $scope.loginuser = {
	 	"email" : "",
	 	"password" : ""
	 }

	 /*$scope.encryptPW = function(){
	 	var pw = "";
	 	for(i in $scope.profile.password)
	 		pw += "*";
	 	return pw;
	 }*/

	 $scope.badUser = false;
	 $scope.goodUser = false;	

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
	 	// check to see that there's an email/password that match against array
	 	
	 	for(var i = 0; i < $scope.user.length; i++) {
	    	if ($scope.user[i].email == $scope.loginuser.email && $scope.user[i].password == $scope.loginuser.password) {
	    		$scope.goodUser = true;
	    	}
	    	console.log("goodUser: " + $scope.goodUser);

	    	if(!$scope.goodUser){
	    		$scope.badUser = true;
	    		console.log("badUser: " + $scope.badUser);
	    		$scope.loginuser.password = "";
	    		return;
	    	}
	    	$location.path("/");

	     }
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
		templateUrl: 'answer.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/home', {
		templateUrl: 'home.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/ask', {
		templateUrl: 'ask.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/login', {
		templateUrl: 'login.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/signup', {
		templateUrl: 'signup.html'
		// controller: 'decisionmakerCtrl'
	})
	
	// .when('/about', {
	// 	templateUrl: 'about.html',
	// 	controller: 'decisionmakerCtrl'
	// })
	.when('/help', {
		templateUrl: 'help.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/profile', {
		templateUrl: 'profile.html'
		// controller: 'decisionmakerCtrl'
	})
	.when('/questions/:questionId', {
		templateUrl: 'singleQuestion.html'
		// controller: 'decisionmakerCtrl'
	})

//	 $locationProvider.html5Mode(true);
})
