angular.module('singleQController', ['ngRoute', 'ngAnimate'])

.controller('singleQCtrl', ['$scope', '$location', '$http', '$routeParams', 
	function($scope, $location, $http, $routeParams) {
	console.log("singleQCtrl reloads")
	$scope.voteOption = ""
	// get questionId from url (passed as a param in url)
	$scope.questionId = $routeParams.questionId

	// $http.get('../json/allQuestions.json').then(function(res){
       // $scope.allQuestions = res.data;      
       // get the question with the corresponding id. will do the logic in SQL in the future
       for(var i = 0; i < $scope.allQuestions.length; i++) {
	     if ($scope.allQuestions[i].id == $scope.questionId) { 
	     	$scope.question = $scope.allQuestions[i]
	     	var questionId = i
	       
	     }
	   }

	$scope.submitVote = function(voteOption){ 
	  console.log("submitted vote : " + voteOption);
	  console.log("----> before : " + JSON.stringify($scope.question))
	  if(voteOption != "") {
	    $scope.question.status = 'answered'
        for (var i = 0; i < $scope.allQuestions[questionId].options.length; i ++){
        	if ($scope.allQuestions[questionId].options[i].option == voteOption){
        		$scope.allQuestions[questionId].options[i].vote ++;
        		//update the question in the database
        		$scope.saveQuestion($scope.allQuestions[questionId]);
        	}
        }
	  }
	  // make a deep copy of updated question so that any change to $scope.question won't 
	  // affect the question in $scope.allQuestions
	  $scope.question = jQuery.extend(true, {}, $scope.allQuestions[questionId]); 
	  $scope.updateVotePercentage()
	   console.log("----> after : " + JSON.stringify($scope.question))
	   console.log("----> after : " + JSON.stringify($scope.allQuestions[questionId]))
	};   	 


	$scope.updateVotePercentage = function(){
	  // data type check - if the vote is in percentage form, stop running this function
	  if(String($scope.question.options[0].vote).includes("%")) return
	  console.log("update called ")
	  var sum = 0
	  for (var i = 0; i < $scope.question.options.length; i++)
	  	sum += $scope.question.options[i].vote
	  
	  for (var i = 0; i < $scope.question.options.length; i++)
	  	$scope.question.options[i].vote = (Math.round(($scope.question.options[i].vote/sum)*100).toString()+"%")
	  // console.log((Math.round(($scope.question.options[i].vote/sum)*100).toString()+"%"))
	} 


	// $scope.updateVotePercentage() 

}])
//.service()
