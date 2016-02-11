angular.module('homeController', ['ngRoute', 'ngAnimate'])

.controller('homeCtrl', ['$scope','$location','$http', function($scope, $location,$http) {


	// read json file
	$http.get('../json/allQuestions.json').then(function(res){
       $scope.allQuestions = res.data;      
       // get questions only asked by the current user. will do the logic in SQL in the future
       $scope.questions = [];
       for(var i = 0; i < $scope.allQuestions.length; i++) {
	     if ($scope.allQuestions[i].user == "raph") 
	     	$scope.questions.push($scope.allQuestions[i]);
	   }
    });


	
	
	

	$scope.check = true;	
	 

}])



