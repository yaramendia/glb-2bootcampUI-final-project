var app=angular.module('LinksService',[]);


app.service('ConvertLinks',function(){	 
   		
	this._convertLinks=function(tweet){
   		if (tweet.entities.urls){  	
	      if(tweet.entities.urls.length > 0){
	        angular.forEach(tweet.entities.urls,function(url){
	          tweet.text = tweet.text.replace(url.url,'<a  target="_blank" class="links" href="'+url.expanded_url+'">'+url.display_url+'</a>');          
	        });    
	    	}
	    };
	    if(tweet.entities.hashtags){
	      if(tweet.entities.hashtags.length > 0){
	        angular.forEach(tweet.entities.hashtags,function(hashtag){
	          tweet.text = tweet.text.replace('#'+hashtag.text,'<a  class="links" href="#trends/trendtweets/'+hashtag.text+'">'+'#'+hashtag.text+'</a>');          
	        });    
	      }
	    };
	    if(tweet.entities.media){
	      if(tweet.entities.media.length > 0){
	        angular.forEach(tweet.entities.media,function(media){
	          tweet.text = tweet.text.replace(media.url,'<a class="links" target="_blank" href="'+media.media_url+'">'+media.display_url+'</a>');
	        });
	      } 
	    };
	    return tweet; 
	};
});

app.filter("convertLinks", ['$sce', function($sce) {
  return function(text){
    return $sce.trustAsHtml(text);
  }
}]);