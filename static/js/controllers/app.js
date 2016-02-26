
angular.module('decisionmaker', ['ngRoute', 'ngAnimate', 'homeController', 
	'askController', 'answerController', 'singleQController', 
	'profileController', 'ngMaterial', 'firebase'])

.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', '$http', '$firebaseObject', '$firebaseArray' , 
	function($scope, $route, $routeParams, $location, $http, 
		$firebaseObject, $firebaseArray) {
		

		console.log("decisionmaker ctrl")

	/***************************************************************
	 ******************** start of database ************************
	 ***************************************************************/

	// connect to questions table in DB
	var ref = new Firebase("https://fiery-inferno-3341.firebaseio.com");
	$scope.allQuestions = $firebaseArray(ref);

  	// add new items to the array IN THE DATABASE
    // the message is automatically added to our Firebase database.
    $scope.addQuestion = function(newQuestion) {
    	$scope.allQuestions.$add(newQuestion);
    };

    // save changes to an item to the array IN THE DATABASE
    // scopeQuestion should be a scope variable that points to an item in
    // $scope.allQuestions.
    $scope.saveQuestion = function(scopeQuestion) {
    	$scope.allQuestions.$save(scopeQuestion);
    }

    // remove an item from the array IN THE DATABASE
	// scopeQuestion should be a scope variable that points to an item in
    // $scope.allQuestions.
    $scope.removeQuestion = function(scopeQuestion){
    	$scope.allQuestions.$remove(scopeQuestion);
    }

    // user accounts table in DB
    var ref_usr = new Firebase("https://dumbo-user.firebaseio.com/");
    $scope.user = $firebaseArray(ref_usr);

	$scope.addUser = function(newUser) {
    	$scope.user.$add(newUser);
    };

    $scope.saveUser = function(scopeUser) {
    	$scope.user.$save(scopeUser);
    }

    $scope.removeUser = function(scopeUser){
    	$scope.user.$remove(scopeUser);
    }
	/***************************************************************
	 ********************* end of database *************************
	 ***************************************************************/


	 $scope.ifLoggedIn = false;
	


	 $scope.determinePageTitle = function(){
	 	var path = $location.path()
	 	if(path == "/")
	 		return "All Questions";
	 	else if (path == "/index_2")
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


	 	


	 $scope.loginuser = {
	 	"name" : "test",
	 	"email" : "test",
	 	"password" : "test",
	 	"confirmPassword" : ""
	 }


	 // $scope.updatedInfo = $scope.loginuser

	 $scope.newUser = {
	 	"name" : "",
	 	"image" : "",
	 	"email" : "",
	 	"password" : "",
	 	"confirm" : ""
	 }

	 $scope.emailExist = false;
	 $scope.passwordMismatch = false;


	 $scope.signup = function(){
	 	$scope.emailExist = false;
	 	$scope.passwordMismatch = false;
	 	for(i=0; i< $scope.user.length; i++){
	 		if($scope.user[i].email === $scope.newUser.email){
	 			$scope.emailExist = true;
	 		}
	 	}
	 	if($scope.newUser.password !== $scope.newUser.confirm) 
	 		$scope.passwordMismatch = true;

	 	if($scope.passwordMismatch || $scope.emailExist || $scope.newUser.name.length == 0 || $scope.newUser.email.length == 0  )
	 		return;
	 	//once here, all validated, ready to add to database
	 	delete $scope.newUser.confirm;
	 	$scope.newUser.image = "./img/profile4.jpg";
	 	$scope.addUser($scope.newUser);
	 	$scope.newUser = {
	 		"name" : "",
	 		"image" : "",
	 		"email" : "",
	 		"password" : "",
	 		"confirm" : ""
	 	};
	 	console.log($scope.user);
	 	$scope.passwordMismatch = false
	 	$scope.emailExist = false
	 	$location.path("/"); 
	 };

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
	.when('/index_2',{
		templateUrl: 'answer_2.html'
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
