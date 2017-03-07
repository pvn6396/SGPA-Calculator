var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/branch', {
		controller: 'BranchController',
		templateUrl: 'views/branch.html',
	})

	.when('/how', {
		controller: 'HowController',
		templateUrl: 'views/how.html',
	})

	.when('/dis', {
		controller: 'DisclaimerController',
		templateUrl: 'views/disclaimer.html',
	})

	.when('/developer', {
		controller: 'DeveloperController',
		templateUrl: 'views/developer.html',
	})

	.when('/faq', {
		controller: 'FaqController',
		templateUrl: 'views/faq.html',
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

// Create the factory that share the Fact
app.factory('data', function(){
  return { 
  	SGPA: '',
  	backSubName:'',
  };

});
