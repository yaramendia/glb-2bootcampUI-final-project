var app=angular.module('NavController',[]);

app.controller('NavController',['$scope', '$location' ,function($scope,$location){

	$scope.isActive=function (url) {
		if ($location.path== url)
			return true;
		else
			return false;
	}
}]);