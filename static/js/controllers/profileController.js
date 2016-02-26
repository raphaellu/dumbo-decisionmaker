angular.module('profileController', ['ngRoute', 'ngAnimate'])

.controller('profileCtrl', ['$scope', '$location', '$http', '$routeParams', 
	function($scope, $location, $http, $routeParams) {

		console.log("profile controller init: " + JSON.stringify($scope.loginuser))
		$scope.updatedInfo = jQuery.extend(true, {}, $scope.loginuser)
		$scope.pwdMatch = true;
		$scope.profileUpdated = false;
		$scope.passwordUpdated = false;
		// console.log("profile -> " + JSON.stringify($scope.loginuser));
		
		$scope.updateData = function() {
			console.log("profile -> " + JSON.stringify($scope.loginuser));
			if($scope.updatedInfo.password === $scope.updatedInfo.confirmPassword) {
				$scope.loginuser.name = $scope.updatedInfo.name;
				// $scope.loginuser.email = $scope.updatedInfo.email;
				$scope.loginuser.password = $scope.updatedInfo.password;
				console.log("changed -> " + JSON.stringify($scope.loginuser));
				$scope.profileUpdated = true;
				$scope.pwdMatch = true;

				for(var i = 0; i < $scope.user.length; i++){
					if ($scope.user[i].email == $scope.loginuser.email) {
						$scope.user[i].name = $scope.loginuser.name;
						$scope.user[i].password = $scope.loginuser.password;
						$scope.saveUser($scope.user[i])
						break
					}
				}
				console.log("all -> " + JSON.stringify($scope.user))
			} else {
				$scope.pwdMatch = false;
				$scope.profileUpdated = false;
			}
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
