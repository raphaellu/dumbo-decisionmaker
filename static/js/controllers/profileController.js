angular.module('profileController', ['ngRoute', 'ngAnimate'])

.controller('profileCtrl', ['$scope', '$location', '$http', '$routeParams', 
	function($scope, $location, $http, $routeParams) {

		$scope.updatedInfo = jQuery.extend(true, {}, $scope.user[0])
		$scope.pwdMatch = true;
		$scope.profileUpdated = false;

		$scope.updateData = function() {

			if($scope.updatedInfo.password === $scope.updatedInfo.confirmPassword) {
				$scope.user[0].name = $scope.updatedInfo.name;
				$scope.user[0].email = $scope.updatedInfo.email;
				$scope.user[0].password = $scope.updatedInfo.password;
				// $scope.user[0].image = "./img/profile2.jpg";
				$scope.profileUpdated = true;
				$scope.pwdMatch = true;
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
