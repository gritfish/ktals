myApp.controller('TimelineCtrl',['$scope','$rootScope','tweetService','pageService', function($scope, $rootScope, tweetService, pageService){
	$rootScope.clicks = 0;
	$scope.tweets = tweetService.getTweets;
	$scope.alertsLength = function(){
		
	}
	$scope.messagesLength = function(){

	}
	$scope.responseClick = function(tweet, response){
		tweet.responded = true;
		response.clicked = true;

		//if clicks > X, auto refresh
		if(response.action){
			angular.forEach(response.action, function(value, key) {
				if(key == 'messages'){
					for (var i = 0; i < value.length; i++) {
						var message = value[i];
						if(message.original == undefined){
							message.original = tweet.text;
							message.originalPerson = tweet.person;
							message.response = response.long;
						}
						$rootScope.messages.push(message);
					};
				}else if(key == 'alerts'){
					for (var i = 0; i < value.length; i++) {
						$rootScope.alerts.push(value[i]);
					};
				}else if(key == 'news'){
					for (var i = 0; i < value.length; i++) {
						$rootScope.news.push(value[i]);
					};
				}else if(key == 'tweets'){
					for (var i = 0; i < value.length; i++) {
						tweetService.addTweet(value[i]);
					};
				}else{
					$rootScope.today[key] += value;
				}
			});
		}
		$rootScope.clicks += 2;
		$scope.clickCheck();
	}
	$scope.showResponses = function (tweet) {
		tweet.showResponses = true;
	}
	$scope.faveTweet = function (tweet) {
		tweet.faved = true;
		if(tweet.faveAction){
			angular.forEach(tweet.faveAction, function(value, key) {
				$rootScope.today[key] += value;
			});
		}
		$rootScope.clicks ++;
		$scope.clickCheck();
	}
	$scope.unfaveTweet = function (tweet) {
		tweet.faved = false;
		if(tweet.faveAction){
			angular.forEach(tweet.faveAction, function(value, key) {
				$rootScope.today[key] -= value;
			});
		}
		$rootScope.clicks --;
	}
	$scope.today = function(element) {
		var isToday = element.day == $rootScope.currentDay ? true : false;
		var isValid = true;
		if(element.required){
			angular.forEach(element.required, function(value, key) {
				if($rootScope.player[key] < element.required[key]){
					isValid = false;
				}
			});
		}
		return (isToday && isValid);
	};
	$scope.clickCheck = function(){
		if($rootScope.clicks >= 8){
			//setTimeout($scope.nextPage,1200);
		}
	}
	$scope.nextPage = function(){
		if($rootScope.today){
			angular.forEach($rootScope.today, function(value, key) {
				$rootScope.player[key] += $rootScope.today[key];
				$rootScope.today[key] = 0;
			});
		}
		if($rootScope.currentDay == 13){
			$('body').fadeOut(2000, function(){
				pageService.setPage('welcome');
				$scope.$apply();
				$('body').fadeIn(200);
			});
		}else{
			$('#page').fadeOut(400);
			$rootScope.clicks = 0;
			var t = setTimeout(function(){$rootScope.currentDay ++;$scope.$apply();$('#page').slideDown('slow')},600)
		}
	}
}])