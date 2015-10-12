var app=angular.module('TimeLineController',['TwitterAPIService','BlockedUserService','MenuController','angularMoment']);

app.controller('TimelineController',['SaveTweet','$scope','TwitterAPI','BlockedUserService',
	function(SaveTweet,$scope,TwitterAPI,BlockedUserService){	

	function filterBlockedUsers(obj){
		var index = $scope.blockedUser.indexOf(obj.user.screen_name);
		if (index > -1 ) {
			return false
		}else{
			return true
		}
	}
	
	$scope.getTimeline=function(){
		$scope.blockedUser = BlockedUserService.blockedList();
		TwitterAPI
		._getTimeline()
		.then(function(data){
				$scope.tweetList=data.filter(filterBlockedUsers);
			})
		.catch(function(err){
			alert(err);
		})
	};

	$scope.goToDetails = function(index) {
		SaveTweet.goTo('/details', $scope.tweetList[index]);
	};
	
	$scope.isRT=function(tweet) {
		if (tweet!=null)
			return true;
		else
			return false;
	}

	$scope.getTimeline();
}]);