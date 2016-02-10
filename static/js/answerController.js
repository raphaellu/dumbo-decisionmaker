angular.module('answerController', ['ngRoute', 'ngAnimate'])

.controller('answerCtrl', ['$scope', '$location', function($scope, $location) {
		
	console.log('Current route name: ' + $location.path());
	
	$scope.answerQuestions = [
		
		{
			"userImage": "./img/profile1.jpg",
			"question": "What are the best programming languages to learn today?",
			"status": "unanswered",
			"button": "Help"
		},

		{
			"userImage": "./img/profile2.jpg",
			"question": "Should I travel to Singapore or Iceland during the summer?",
			"status": "unanswered",
			"button": "Help"
		},

		{
			"userImage": "./img/profile3.jpg",
			"question": "Should I go to UC San Diego or UC Davis to study Computer Science?",
			"status": "answered",
			"button": "View"
		},

		{
			"userImage": "./img/profile4.jpg",
			"question": "Should I eat at In-N-Out or Wendy's?",
			"status": "closed",
			"button": "View"
		}
	];

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

//	 $locationProvider.html5Mode(true);
}])
