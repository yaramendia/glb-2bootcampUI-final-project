var app=angular.module('DetailsController',['TempService']);

app.controller('DetailsController',['$scope','$args',function($scope,$args){
		 $scope.tweet=$args;
}]);