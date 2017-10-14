var app = angular.module('chasebidApp');
app.controller('homeCtrl',function($state,$scope){
	console.log("homeCtrl loaded...");

	$scope.bidnow = function()
    {
        console.log("function call");
        $state.go("bidnow");
    }

});
