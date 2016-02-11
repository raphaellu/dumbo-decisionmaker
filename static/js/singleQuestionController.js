angular.module('singleQuestionController', ['ngRoute', 'ngAnimate'])

.controller('singleQuestionCtrl', ['$scope', '$location', function($scope, $location) {
		
	console.log('Current route name: ' + $location.path());
	
	$scope.questions = [
			{
				'userImage': "./img/profile4.jpg",
				'question': "What are the best programming languages to learn today?",
				'options' : ['Ruby', 'Python', 'C', 'Ocaml'],
				'votes': ['20%', '30%', '50%', '0%'] 
			},
			{
				'userImage': "./img/profile4.jpg",
				'question': "Should I travel to Singapore or Iceland during the summer?",
				'options' : ['Singapore', 'Iceland'],
				'votes': ['70%', '30%'] 
			},
			{
				'userImage': "./img/profile4.jpg",
				'question': "Should I go to UC San Diego or UC Davis to study Computer Science?",
				'options' : ['UC San Diego', 'UC Davis'],
				'votes': ['100%', '0%'] 
			},
			{
				'userImage': "./img/profile4.jpg",
				'question': "Should I eat at In-N-Out or Wendy's?",
				'options' : ['In-N-Out', "Wendy's"],
				'votes': ['60%', '40%'] 
			},
			{
				'userImage': "./img/profile4.jpg",
				'question': "Simpson's or South Park?",
				'options' : ["Simpson's", "South Park"],
				'votes': ['65%', '35%'] 
			},
			{
				'userImage': "./img/profile4.jpg",
				'question': "Should I take CSE 127 or CSE 131 next quarter?",
				'options' : ["CSE 127", "CSE 131"],
				'votes': ['75%', '25%'] 
			}
	];
//	 $locationProvider.html5Mode(true);
}])
