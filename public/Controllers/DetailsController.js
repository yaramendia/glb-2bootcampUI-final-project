var app=angular.module('DetailsController',['TempService']);

app.controller('DetailsController',['$scope','$args',function($scope,$args){
		 $scope.tweet=$args;


	$scope.parseDate = function (date) {
		$scope.dateModify=Date.parse(date);
	}

	$scope.parseDate($scope.tweet.created_at);

	$scope.isRT=function(tweet) {
		if (tweet!=null)
			return true;
		else
			return false;
	}
}]);