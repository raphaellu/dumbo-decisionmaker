angular.module('askController', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.controller('askCtrl', ['$scope','$location','$http', function($scope, $location, $http) {
		
	 $scope.newObj = {
	 	'question': "I need a companion! Should I get a cat or a dog to keep me company?",
	 	'isPoll': true,
	 	'options': ["cat","dog"]
	 }

	


	 $scope.submit = function(json){
	 	 $scope.newJsonToBeSent = {
			"id": $scope.allQuestions.length+1,
			"userImage": "./img/profile4.jpg",
			"question": $scope.newObj.question,
			"status": "undecided",
			"options": [],
			"user": "raph" 
		}

	 	for(var i = 0 ; i < $scope.newObj.options.length; i++) {
	 	$scope.newJsonToBeSent.options.push( {
	 		"option": $scope.newObj.options[i],
	 		"vote": "0%"
	 	  })
	 	}
	 	console.log(JSON.stringify($scope.newJsonToBeSent));
	 	$scope.allQuestions.unshift($scope.newJsonToBeSent);
	
	 }



}])

