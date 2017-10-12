angular.module('chasebidApp', ['chasebidApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('signUp', {
		url: '/signUp',
		templateUrl:'../html_templates/SignUpReg.html',
		controller:'signupCtrl'
	})
	.state('home', {
		url: '/home',
		templateUrl:'../html_templates/home_page.html',
		// controller:'signupCtrl'
	})

	$urlRouterProvider.otherwise('/');
}); //config ends
