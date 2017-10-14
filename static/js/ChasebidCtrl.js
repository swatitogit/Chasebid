angular.module('chasebidApp.controllers',[])
.controller('chasebidCtrl', function($log,$scope,$state){
console.log(" chasebidCtrl loaded...");

$scope.SignUp_data= {
    FirstName: null,
    LastName: null,
    UserName: null,
    Email: null,
    City: null,
    Password: null,
    MobileNumber: null,
};
    $scope.saveSignUpData = function()
    {
        $state.go("home");
        console.log('SignUp',$scope.SignUp_data);
    }


$scope.SignIn_Data= {
    Username: null,
    Password: null,
};
    $scope.saveSignInData = function(){
        $state.go("UserProfile");
        console.log('SignIn',$scope.SignIn_Data)
    }

});


