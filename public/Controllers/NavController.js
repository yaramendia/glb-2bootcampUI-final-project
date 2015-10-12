var app=angular.module('MenuController',[]);

app.controller('NavController',['$scope', '$location' ,function($scope,$location){
	
	$scope.isActive=function (url) {
		return url === $location.path();
	};
}]);