var app = angular.module('chasebidApp');
app.controller('signupCtrl',function($state,$scope,$stateParams){
	console.log("signupCtrl loaded...");
	console.log($stateParams)
	$scope.FirstName=$stateParams.FirstName;
	$scope.LastName=$stateParams.LastName;
	$scope.UserName=$stateParams.UserName;
	$scope.Email=$stateParams.Email;
	$scope.Password=$stateParams.Password;
	$scope.City=$stateParams.City;
	$scope.MobileNumber=$stateParams.MobileNumber;
});
