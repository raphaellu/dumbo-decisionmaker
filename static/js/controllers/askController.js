angular.module('askController', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages'])

.controller('askCtrl', ['$scope','$location','$http', function($scope, $location, $http) {
		
	 $scope.newObj = {
	 	'question': "",
	 	// 'isPoll': true,
	 	'options': []
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
	 		"vote": 0
	 	  })
	 	}
	 	console.log(JSON.stringify($scope.newJsonToBeSent));
	 	$scope.addQuestion($scope.newJsonToBeSent);

	 	$scope.newObj.question = "";
	 	$scope.newObj.options = [];
	 	$scope.justNewQuestion.value = true;
	 	$scope.showStatus();
	 	if ($scope.ABversion == "A")
	 		$location.path("/home");
	 	else
	 		$location.path("/index_2");
	
	 }



}])

