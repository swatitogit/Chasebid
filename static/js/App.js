angular.module('chasebidApp', ['chasebidApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('signUp', {
		url: '/signUp',
		templateUrl:'../html_templates/SignUpReg.html',
		controller:'signupCtrl'
	})
	.state('signIn', {
		url: '/signIn',
		templateUrl:'../html_templates/SignIn.html',
		controller:'signInCtrl'
	})

	.state('signInDashboard', {
		url: '/signInDashboard',
		templateUrl:'../html_templates/SignInDashboard.html',
		// controller:'signInCtrl'
	})

	.state('home', {
		url: '/home',
		templateUrl:'../html_templates/home_page.html',
		// controller:'signupCtrl'
	})
	.state('Indexhome', {
		url: '/Indexhome',
		templateUrl:'../html_templates/home_page.html',
		// controller:'signupCtrl'
	})

	$urlRouterProvider.otherwise('/Indexhome');
}); //config ends
