angular.module('homeController', ['ngRoute', 'ngAnimate'])

.controller('homeCtrl', ['$scope','$location','$http', function($scope, $location,$http) {
	console.log("homeController");

	// read json file
	// $scope.getHomeQuestionJson = function(){

		// if ($scope.homeQuestions.length == 0) {
			// $http.get('../json/allQuestions.json').then(function(res){
			// 	$scope.allQuestions = res.data;      
       // get questions only asked by the current user. will do the logic in SQL in the future
       $scope.homeQuestions = []
       for(var i = 0; i < $scope.allQuestions.length; i++) {
       	if ($scope.allQuestions[i].user == "raph") 
       		$scope.homeQuestions.push($scope.allQuestions[i]);
       }


       $scope.logIn = function(){
        for(var i = 0; i < $scope.user.length; i++) {
          if ($scope.user[i].email == $scope.loginuser.email && $scope.user[i].password == $scope.loginuser.password) {
            $scope.goodUser = true;
            $scope.loginuser.name = $scope.user[i].name;
            $scope.loginuser.email = $scope.user[i].email;
            $scope.loginuser.password = $scope.user[i].password;
            console.log("found the user!" +JSON.stringify($scope.loginuser))
          }
        }

        if(!$scope.goodUser){
         $scope.badUser = true;
         console.log("badUser: " + $scope.badUser);
         $scope.loginuser.password = "";
         return;
        } else 
          $location.path("/");
      }
   // });
		// }
    // console.log("length ->  " + $scope.homeQuestions);
// }



}])



