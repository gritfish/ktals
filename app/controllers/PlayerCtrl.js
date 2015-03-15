myApp.controller('PlayerCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$rootScope.player = {};
	$rootScope.currentDay = 1;
	$rootScope.player.empathetic = 0;
	$rootScope.player.opinionated = 0;
	$rootScope.player.organic = 0;
	$rootScope.player.synthetic = 0;
	$rootScope.player.reserved = 0;
	$rootScope.player.harsh = 0;
	$rootScope.today = {};
	$rootScope.today.empathetic = 0;
	$rootScope.today.opinionated = 0;
	$rootScope.today.organic = 0;
	$rootScope.today.synthetic = 0;
	$rootScope.today.reserved = 0;
	$rootScope.today.harsh = 0;
}]);