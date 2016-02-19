angular.module('profileController', ['ngRoute', 'ngAnimate'])

.controller('profileCtrl', ['$scope', '$location', '$http', '$routeParams', 
	function($scope, $location, $http, $routeParams) {
		
		console.log('Current route name: ' + $location.path());
		$scope.updateData = function() {
			$scope.user[0].name = "Jelly";
			$scope.user[0].password = "boba";
			$scope.user[0].image = "./img/profile2.jpg";
		};


  }])
  
	// $scope.userId = $routeParams.userId;
	// $scope.email = $()
	// // read json file
	// // $http.get('../json/allQuestions.json').then(function(res){
 //       // $scope.allQuestions = res.data;     

 //       // get questions only asked by other users. will do the logic in SQL in the future
 //    for(var i = 0; i < $scope.allUsers.length; i++) {
	//     if ($scope.allUsers[i].id == $scope.userId) 
	//        $scope.user = $scope.allUsers[i];
	// }
 //    // });

	// this.user = {
	// 	name: '',
	// 	email: ''
	// };

	// this.login = function() {
	// 	console.log(this.user);
	// };
	

//	 $locationProvider.html5Mode(true);

	// $scope.user = {};
 //    $scope.saveData = function() {
 //    	$rootScope.userEmail = $scope.user.email;
 //    	$rootScope.userPw = $scope.user.password;

 //    	for(var i = 0; i < $scope.allUsers.length; i++) {
	//     	if ($scope.[iallUsers].email == $rootScope.userEmail){
	//        		$rootScope.userImage = $scope.allUsers[i].image;
	//        		$rootScope.userName = $scope.allUsers[i].name;
	//        	}
 //    	}
 //    };
