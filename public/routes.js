var app=angular.module('TwitterApp',['ngRoute','BlockedUsersController','DetailsController','TimeLineController','TrendsController','TrendsTweetsController']);

app.config(['$routeProvider',function ($routeProvider) {
	
	$routeProvider
	.when('/',{
		templateUrl: 'View/Timeline.html',
		controller: 'TimelineController'
	})

	.when('/blockedUsers',{
		templateUrl: 'View/BlockedUsers.html',
		controller: 'BlockedUsersController'
	})

	.when('/trends',{
		templateUrl: 'View/Trends.html',
		controller: 'TrendsController'
	})

	.when('/details',{
		templateUrl: 'View/Details.html',
		controller: 'DetailsController'
	})

	.when('/trends/trendtweets/:name',{
		templateUrl: 'View/Timeline.html',
		controller: 'TrendsTweetsController'
	})

	.otherwise({redirectTo: '/'});

}]);
