var app=angular.module('BlockedUserService',['ngStorage']);

app.service('BlockedUserService',['$localStorage',function($localStorage){

	var blist=[];

	this.blockedList=function(){
		for(i=0; i<localStorage.length;i++)
		{
			key=localStorage.key(i);
			blist[i]=localStorage.getItem(key);
		}
		return blist;
	}

	this.removeBlockedUser=function(index){
		key=localStorage.key(index);
		localStorage.removeItem(key);
		blist.splice(index,1);
		return blist;
	}

	this.addBlockedUser=function(user){
		if (localStorage.length==0){
			localStorage.setItem(1,user);
		}
		else
		{
		var index=localStorage.length-1;
		var pos=parseInt(localStorage.key(index))+1;
		localStorage.setItem(pos,user);
		}	
	}
}]);