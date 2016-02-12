angular.module('singleQController', ['ngRoute', 'ngAnimate'])

.controller('singleQCtrl', ['$scope', '$location', '$http', '$routeParams', 
	function($scope, $location, $http, $routeParams) {
		
	// get questionId from url (passed as a param in url)
	$scope.questionId = $routeParams.questionId;

	$http.get('../json/allQuestions.json').then(function(res){
       $scope.allQuestions = res.data;      
       // get the question with the corresponding id. will do the logic in SQL in the future
       for(var i = 0; i < $scope.allQuestions.length; i++) {
	     if ($scope.allQuestions[i].id == $scope.questionId) 
	     	$scope.question = $scope.allQuestions[i];
	   }	   
    });
//	 $locationProvider.html5Mode(true);
	$scope.qSubmit = false;
	$scope.choiceVal;
	$scope.submitted(){
		if($scope.choiceVal != null){
			$scope.qSubmit = true;
		}
	}
}])
//.service()
