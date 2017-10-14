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

	.state('UserProfile', {
		url: '/UserProfile',
		templateUrl:'../html_templates/UserProfile.html',
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
