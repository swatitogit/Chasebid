var app = angular.module('chasebidApp');
app.controller('signInCtrl',function($state,$scope,$stateParams){
	console.log("signInCtrl loaded...");
	console.log($stateParams)
	$scope.Username=$stateParams.Username;
	$scope.Password=$stateParams.Password;
});
