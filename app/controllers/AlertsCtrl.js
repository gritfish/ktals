myApp.controller('AlertsCtrl',['$scope','$rootScope', function($scope,$rootScope){
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
	$rootScope.alerts = [
		{day:2, time: 100,  text: 'FriendPage is pleased to announce our partnership with Oqular. The digital implant media platform now allows you to access all your favourite FriendPage content streamed directly to your Intraocular lens! For more information about FriendPage and Oqular, please see our website.' },
		{day:4, time: 100,  text: 'Voight has changed their status to "In a relationship"' },
		{day:5, time: 100,  text: 'Voight has changed their status to "Single"' },
		{day:6, time: 100,  text: 'Gustav has changed their status to "In a relationship"' },
		{day:6, time: 100,  text: 'Klein has changed their status to "In a relationship"' },
		{day:7, time: 100,  text: 'Gustav has changed their status to "Single"' },
		{day:7, time: 100,  text: 'Klein has changed their status to "Single"' },
		{day:7, time: 100,  text: 'Brigitte has changed their status to "In a relationship"' },
		{day:8, time: 100,  text: 'Due to recent actions being taken by some users, we have updated our terms of service. If you have been among those who have received death threats, or threats of physical or sexual violence, please read our new terms document and fill out the small survey to let us know how it has improved your experience.' },
		{day:9, time: 100,  text: 'We would like to remind all users of the FriendPage service that all timestream communications are considered public knowledge and maybe be shared with law enforcement. For more information prease review our terms and conditions document.' },
		{day:9, time: 100,  text: 'The FriendPage service stands with our local law enforcement professionals. If you see users discussing attacking or preventing the police from doing their jobs, please read our new terms document and fill out the small survey to let us know how it has improved your experience.' },
		{day:10, time: 100,  text: 'The account for user "Gustav" has been suspended pending a police investigation into the distribution of prohibited footage. This message is to notify you that you may be contacted by law enforcement about activity that may have occurred between you and this user.' },
		{day:12, time: 100,  text: 'Brigitte has changed their status to "Married"' },
		{day:12, time: 100,  text: 'Salli has changed their status to "Married"' },
		{day:13, time: 100,  text: 'FriendPage would like to apologise for the fluctuations in our tailored marketing AI. While future systems will not make use of AI technology, we thank you for staying with us as we continue to offer our excelent marketed services in new and exciting ways.' }
	];
}])