angular.module('answerController', ['ngRoute', 'ngAnimate','singleQController', 'ngMaterial', 'ngMessages'])

.controller('answerCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
		
	// console.log('Current route name: ' + $location.path());
	

	// read json file
	// $http.get('../json/allQuestions.json').then(function(res){
       // $scope.allQuestions = res.data;     

       // get questions only asked by other users. will do the logic in SQL in the future
      $scope.answerQuestions = [];
       for(var i = 0; i < $scope.allQuestions.length; i++) {
	     if ($scope.allQuestions[i].user != "raph") 
	        $scope.answerQuestions.push($scope.allQuestions[i]);
	   }
    // });

	// if submitted, change status, 
    // if($scope.qSubmit){

    // }

	
	
	// for icon specifying the status of the question
	$scope.iconChanger = function(status){
		switch (status) {
			case "unanswered":
				return "glyphicon glyphicon-question-sign";
			case "answered":
				return "glyphicon glyphicon-ok-sign";
			case "closed":
				return "glyphicon glyphicon-remove-sign";
		} 	
	};

	$scope.badgeChanger = function(status){
		switch (status) {
			case "unanswered":
				return "color: white; background-color: #FF530D";
			case "answered":
				return "color: white; background-color: #38671D";
			case "closed":
				return "color: white; background-color: #69625E";
		} 	
	}

	$scope.buttonTypeChanger = function(status){
		switch (status) {
			case "unanswered":
				return "btn btn-info";
			case "answered":
				return "btn btn-success";
			case "closed":
				return "btn btn-default";
		} 	
	};

	$scope.buttonTextChanger = function(status){
		switch (status) {
			case "unanswered":
				return "Help";
			case "answered":
				return "View";
			case "closed":
				return "View";
		} 
	}

	$scope.goToQuestion = function(link){
		console.log(link)
		$location.path(link);
	}

//	 $locationProvider.html5Mode(true);
}])
