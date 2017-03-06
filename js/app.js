var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/branch', {
		controller: 'BranchController',
		templateUrl: 'views/branch.html',
	})

	.when('/calcs', {
		controller: 'CalCSController',
		templateUrl: 'views/calcs.html',
	})

	.when('/caltc', {
		controller: 'CalTCController',
		templateUrl: 'views/caltc.html',
	})

	.when('/result', {
		controller: 'ResultController',
		templateUrl: 'views/result.html',
	})

		.when('/', {
		controller: 'BranchController',
		templateUrl: 'views/branch.html',
	})
	.otherwise({
	redirectTo: '/branch'
	});
});

