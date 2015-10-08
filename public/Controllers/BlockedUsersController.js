var app=angular.module('BlockedUsersController',['BlockedUserService']);

app.controller('BlockedUsersController',['$scope','BlockedUserService' ,function($scope,BlockedUserService){
	
	$scope.searchUsersBlocked=function(){
		$scope.blockedList=BlockedUserService.blockedList();
	}

	$scope.blockUser=function(user){
		$scope.blockedList=BlockedUserService.addBlockedUser(user);
	}

	$scope.releaseUser=function(index){
		$scope.blockedList=BlockedUserService.removeBlockedUser(index);
	}

	$scope.searchUsersBlocked();	
}]);