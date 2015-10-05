var app=angular.module('TrendsTweetsController',['TwitterAPIService','TempService']);

app.controller('TrendsTweetsController',['$scope','TwitterAPI','$routeParams','SaveTweet',function($scope,TwitterAPI,$routeParams,SaveTweet){
	
	$scope.getTrendTweets=function(name){
		TwitterAPI
		._getTrendsTweets(name)
		.then(function(data){
			$scope.tweetList=data.statuses;
		})
		.catch(function(err){

		})
	}

	$scope.goToDetails = function(index) {
		SaveTweet.goTo('/details', $scope.tweetList[index]);
	};
	//maybe change the way that we set the param for the query 
	$scope.getTrendTweets(encodeURIComponent($routeParams.name));

}]);