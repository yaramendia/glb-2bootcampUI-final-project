var app=angular.module('MenuController',[]);

app.controller('NavController',['$scope', '$location' ,function($scope,$location){

	$scope.isActive=function (url) {
		return url === $location.path();
	};

	$scope.view=function (url) {
		if (url == '/')
			$scope.view='Home';
		else if (url == '/blockedUsers')
				$scope.view='Blocked Users';
			else if (url == '/trends')
				$scope.view='Trends';
			else
				$scope.view="Twitter";
	}
}]);