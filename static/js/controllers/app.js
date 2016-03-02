
angular.module('decisionmaker', ['ngRoute', 'ngAnimate', 'homeController', 
	'askController', 'answerController', 'singleQController', 
	'profileController', 'ngMaterial', 'firebase'])

.controller('decisionmakerCtrl', ['$scope', '$route', '$routeParams',
	'$location', '$http', '$firebaseObject', '$firebaseArray' , 
	function($scope, $route, $routeParams, $location, $http, 
		$firebaseObject, $firebaseArray) {
		

		
	//randomly render AB Testing version
	$scope.ABversion = Math.random() < 0.5 ? "A" : "B";	
	console.log("decisionmaker ctrl, version : " + $scope.ABversion)


	$scope.goToAllQuestions = function () {
		if ($scope.ABversion == "A")
			$location.path("/"); 
		else
			$location.path("/index_2"); 
	}

	// if a user just submitted a new question, "my questions" tab would be activated
	$scope.justNewQuestion = {
		"value": false
	}

	$scope.setDefaultTab = function(){
		console.log("set active tab back to all questions");
		$scope.justNewQuestion.value = false;
	}	

	$scope.showStatus = function (){
		console.log("========== $scope.justNewQuestion : " + JSON.stringify($scope.justNewQuestion) + " =============")
	}

	$scope.showStatus();
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

    // for AB testing counter purpose
    var ref_counter = new Firebase("https://dumbo-ab.firebaseio.com/");
    $scope.ABcounter = $firebaseArray(ref_counter);
    $scope.uniqueClicked = false;
    $scope.increaseClickCounter = function(){
    	console.log("increase Click Counter");
    	console.log("    $scope.uniqueClicked = " + $scope.uniqueClicked)
    	if(!$scope.uniqueClicked) {
    		$scope.ABcounter[0][$scope.ABversion] = $scope.ABcounter[0][$scope.ABversion] + 1;
    		console.log("$scope.ABcounter[0][$scope.ABversion] : " +$scope.ABcounter[0][$scope.ABversion] );
    		$scope.ABcounter.$save($scope.ABcounter[0]);
    		$scope.uniqueClicked = true;
    	}
    	console.log("    $scope.uniqueClicked = " + $scope.uniqueClicked);
    	$scope.ABcounter[1][$scope.ABversion] = $scope.ABcounter[1][$scope.ABversion] + 1;
    	$scope.ABcounter.$save($scope.ABcounter[1]);
    }

    $scope.uniqueSum = false;
    $scope.increaseSumCounter = function(){
    	console.log("increase Sum Counter");
    	if(!$scope.uniqueSum){
    		$scope.ABcounter[0][$scope.ABversion+"Sum"] = $scope.ABcounter[0][$scope.ABversion+"Sum"] + 1;
    		$scope.ABcounter[1][$scope.ABversion+"Sum"] = $scope.ABcounter[1][$scope.ABversion+"Sum"] + 1;
    		$scope.ABcounter.$save($scope.ABcounter[0]);
    		$scope.ABcounter.$save($scope.ABcounter[1]);
    		$scope.uniqueSum = true;
    	}
    }


    $scope.checkDataReady = function() {
    	console.log("check - data- ready");
    	if(typeof $scope.user == "undefined" || typeof $scope.ABcounter == "undefined" || typeof $scope.allQuestions == "undefined")
    		return false;
    	return true;
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
	 		return " Questions";
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
	 	"name" : "",
	 	"email" : "superuser@ucsd.edu",
	 	"password" : "superuser",
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
	 	if(!$scope.checkDataReady())
	 		return;
		 // AB Testing counter
        $scope.increaseSumCounter();
	
		// actual sign up logic
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
	 	$scope.goToAllQuestions(); 
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
