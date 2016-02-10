angular.module('homeController', ['ngRoute', 'ngAnimate'])

.controller('homeCtrl', ['$scope','$location', function($scope, $location) {

	$scope.questions = [
			{
				'question': "What are the best programming languages to learn today?",
				'options' : ['Ruby', 'Python', 'C', 'Ocaml']
			},
			{
				'question': "Should I travel to Singapore or Iceland during the summer?",
				'options' : ['Singapore', 'Iceland']
			},
			{
				'question': "Should I go to UC San Diego or UC Davis to study Computer Science?",
				'options' : ['UC San Diego', 'UC Davis']
			},
			{
				'question': "Should I eat at In-N-Out or Wendy's?",
				'options' : ['In-N-Out', "Wendy's"]
			},
			{
				'question': "Simpson's or South Park?",
				'options' : ["Simpson's", "South Park"]
			},
			{
				'question': "Should I take CSE 127 or CSE 131 next quarter?",
				'options' : ["CSE 127", "CSE 131"]
			}
	];		
	 

}])



