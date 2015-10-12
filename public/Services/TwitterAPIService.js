var app=angular.module('TwitterAPIService',['LinksService']);

app.service('TwitterAPI',['$http','$q','ConvertLinks',function($http,$q,ConvertLinks){
	return {
		_getTimeline: _getTimeline,
		_getTrends:_getTrends,
		_getGeolocation: _getGeolocation,
		_getTrendsTweets: _getTrendsTweets

	}

	function _getTimeline(){
		var defered=$q.defer();
		var promise= defered.promise;
		$http.get('http://localhost:3000/timeline?count=100')
		.success(function(data){
				var tw = data;
				angular.forEach(tw,function(tweet){
					if(tweet.retweeted_status){
						tweet.retweeted_status = ConvertLinks._convertLinks(tweet.retweeted_status);
					}
					else{
						tweet=ConvertLinks._convertLinks(tweet);
					}
				});
			defered.resolve(data);
		})
		.error(function(err){
			defered.reject("API Error - TimeLine")
		});
		return promise;
	}

	function _getGeolocation(geolocation){
		var defered=$q.defer();
		var promise= defered.promise;
		$http.get('http://localhost:3000/myplace?'+geolocation)
		.success(function(data){
			defered.resolve(data);
		})
		.error(function(err){
			defered.reject("API Error - Geolocation")
		});
		return promise;
	}

	function _getTrends(id){
		var defered=$q.defer();
		var promise= defered.promise;
		$http.get('http://localhost:3000/trends?id='+id)
		.success(function(data){
			defered.resolve(data[0].trends);
		})
		.error(function(err){
			defered.reject("API Error - Trends")
		});
		return promise;
	}

	function _getTrendsTweets(trend){
		var defered=$q.defer();
		var promise= defered.promise;
		$http.get('http://localhost:3000/search?q='+trend)
		.success(function(data){
				var tw = data.statuses;
				angular.forEach(tw,function(tweet){
					if(tweet.retweeted_status){
						tweet.retweeted_status = ConvertLinks._convertLinks(tweet.retweeted_status);
					}
					else{
						tweet=ConvertLinks._convertLinks(tweet);
					}
				});
			defered.resolve(data);
		})
		.error(function(err){
			defered.reject("API Error - Trends")
		});
		return promise;
	}
}]);