var app=angular.module('BlockedUsersController',['BlockedUserService','MenuController']);

app.controller('BlockedUsersController',['$scope','BlockedUserService','$timeout',function($scope,BlockedUserService,$timeout){
	
	$scope.searchUsersBlocked=function(){
		$scope.blockedList=BlockedUserService.blockedList();
	}

	$scope.blockUser=function(user){
		$scope.blockedList=BlockedUserService.addBlockedUser(user);
		var bt=document.getElementById("bt_Add");
		bt.value="";
		$scope.alertAdd=true;
		$timeout(function(){
			$scope.alertAdd=false;
		},2500);
		$scope.searchUsersBlocked();
	}

	$scope.releaseUser=function(index){
		$scope.blockedList=BlockedUserService.removeBlockedUser(index);
		$scope.alertRemove=true;
		$timeout(function(){
			$scope.alertRemove=false;
		},2500);
	}

	$scope.searchUsersBlocked();	
}]);