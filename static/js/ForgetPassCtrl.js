var app = angular.module('chasebidApp');
app.controller('ForgetPassCtrl',function($state,$scope,$stateParams){
	console.log("ForgetPassCtrl loaded...");
	console.log($stateParams)
	$scope.email=$stateParams.email;
});
