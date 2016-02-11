angular.module('askController', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.controller('askCtrl', ['$scope','$location', function($scope, $location) {
		
	 $scope.newObj = {
	 	'question': "I need a companion! Should I get a cat or a dog to keep me company?",
	 	'isPoll': true,
	 	'options': []
	 }

	 $scope.submit = function(){
	 	
	 }



}])

