var app = angular.module('chasebidApp');
app.controller('ProfileCtrl',function($state,$scope,$stateParams){
	console.log("ProfileCtrl loaded...");
	console.log($stateParams)
	$scope.FirstName=$stateParams.FirstName;
	$scope.LastName=$stateParams.LastName;
	$scope.UserName=$stateParams.UserName;
	$scope.Address1=$stateParams.Address1;
	$scope.Address2=$stateParams.Address2;
	$scope.City=$stateParams.City;
	$scope.MobileNumber=$stateParams.MobileNumber;
	$scope.PostCode=$stateParams.PostCode;
	$scope.oldPassword=$stateParams.oldPassword;
	$scope.newPassword=$stateParams.newPassword;
	$scope.CnfrmPassword=$stateParams.CnfrmPassword;
});
