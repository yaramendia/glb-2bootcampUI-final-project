var app=angular.module('TrendsController',['TwitterAPIService']);

app.controller('TrendsController',['$scope','TwitterAPI',function($scope,TwitterAPI){

	//GEOLOCATION
	function getLocation(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function (position){
			var pos="lat="+position.coords.latitude+"&long="+position.coords.longitude;
			$scope.getGeoLocation(pos);
			});
		}
		else
			alert("Geolocation is not supported by this browser.");
	}
	
	$scope.getGeoLocation=function(pos){
		TwitterAPI
		._getGeolocation(pos)
		.then(function(data){
			$scope.getTrends(data[0].parentid);
		})
		.catch(function(err){

		})
	}

	$scope.getTrends=function(geo){
		TwitterAPI
		._getTrends(geo)
		.then(function(data){
			$scope.trendsList=data;
		})
		.catch(function(err){

		})
	}

	getLocation();

}]);