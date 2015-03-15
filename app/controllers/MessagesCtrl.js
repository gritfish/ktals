myApp.controller('MessagesCtrl',['$scope','$rootScope', function($scope,$rootScope){
	$scope.today = function(element) {
		return element.day == $rootScope.currentDay ? true : false;
	};
	$scope.responseClick = function(tweet, response){
		tweet.responded = true;
		response.clicked = true;
		//if clicks > X, auto refresh
		if(response.action){
			angular.forEach(response.action, function(value, key) {
				if(key == 'messages'){
					for (var i = 0; i < value.length; i++) {
						$rootScope.messages.push(value[i]);
					};
				}else if(key == 'alerts'){
					for (var i = 0; i < value.length; i++) {
						$rootScope.alerts.push(value[i]);
					};

				}else if(key == 'news'){
					for (var i = 0; i < value.length; i++) {
						$rootScope.news.push(value[i]);
					};

				}else{
					$rootScope.today[key] += value;
				}
			});
		}
	}
	$scope.showResponses = function (tweet) {
		tweet.showResponses = true;
	}
	$scope.faveTweet = function (tweet) {
		tweet.faved = true;
		if(response.faveAction){
			angular.forEach(response.faveAction, function(value, key) {
				$rootScope.today[key] += value;
			});
		}
	}
	$scope.unfaveTweet = function (tweet) {
		tweet.faved = false;
		if(response.faveAction){
			angular.forEach(response.faveAction, function(value, key) {
				$rootScope.today[key] -= value;
			});
		}
	}
	$rootScope.messages = [
		{person:'shima', day:1, time: 100, text:'Sorry to see you go, dude.. but I get it.'},
		{person:'shima', day:2, time: 100, text:'Things are strange here, J. All these implanters everywhere. It\'ll probably be the same when you get there.'},
		{person:'shima', day:2, time: 200, text:'Probably should brace yourself. Catch up on the news.'},
		{person:'shima', day:5, time: 200, text:'Man.. Things here are fucked right now. You should be glad you got out.'},
		{person:'brigitte', day:6, time:100, text:'So.. this crush.. um.. she\'s a synthetic. Is that weird? I don\'t know if I can talk about it with anyone back here yet.',
			responses:[
				{clicked:false, short:'I didn\'t realise you were into robots', long:'I didn\'t realise you were into robots.',
					action: {
						messages:[{person:'brigitte',day:7,time:100,text:'She\'s not a robot.. :( I guess synthetics weren\'t around when you left. It\'s okay, don\'t worry about it.'}]
					}
				},
				{clicked:false, short:'I didn\'t realise you were into girls', long:'I didn\'t realise you were into girls',
					action: {
						messages:[{person:'brigitte',day:7,time:100,text:'haha.. neither did I. ;)'}]
					}
				},
				{clicked:false, short:'I think it\'s fine as long as she makes you happy.', long:'I think it\'s fine as long as she makes you happy.',
					action: {
						messages:[{person:'brigitte',day:7,time:100,text:'Thanks J. That means a lot. (PS: We\'ve been dating for a while now! :D)'}]
					}
				}
			]
		},
		{person:'alice', day:7, time:100, text:'We had a little memorial in the park today. It was nice. Thought you should know.',
			replies:[
				{person:'alice', day:7, time:200, text:'Shit. It\'s probably still only months ago for you. I\'m sorry. Fuck.'}
			]
		},
		{person:'julius', day:10, time:200, text:'Hey man.. If you get a message from Gus, let us know yeah? We\'re worried about him.',
			responses:[
				{clicked:false, short:'I haven\'t heard anything', long:'I haven\'t heard anything.. What happened?',
					action: {
						messages:[{person:'julius',day:11,time:100,text:'He restreamed a bunch of recordings of the riots. Disappeared after. No one\'s heard from him.'}]
					}
				},
				{clicked:false, short:'Did something happen?', long:'No messages. Did something happen in the riots?',
					action: {
						messages:[{person:'julius',day:11,time:100,text:'He archived and restreamed a bunch of Oqular recordings. Someone tore his place apart. He\'s been in the wind since.'}]
					}
				},
				{clicked:false, short:'I\'ll keep an eye out', long:'Haven\'t seen anything, but I\'ll keep an eye out',
					action: {
						messages:[{person:'julius',day:11,time:100,text:'Okay. Thought he might reach out to you as you\'re not exactly easy to close to any of this.'}]
					}
				}
			]
		}

	];
}])