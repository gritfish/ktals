myApp.controller('PageCtrl', ['$scope','$rootScope','pageService', function($scope, $rootScope, pageService) {
	$scope.title = pageService.getTitle;
	$scope.setPage = pageService.setPage;
	$scope.page = pageService.getPage;
	$scope.timelineInfo = [
		{day:1, externalDate:'2th November, 2042', eta:'16th November, 2071'},
		{day:2, externalDate:'4th April, 2043', eta:'8th March, 2072'},
		{day:3, externalDate:'30th September, 2045', eta:'15th July, 2071'},
		{day:4, externalDate:'6th January, 2047', eta:'30th February, 2071'},
		{day:5, externalDate:'7th April, 2048', eta:'21th October, 2072'},
		{day:6, externalDate:'24th August, 2051', eta:'3rd March, 2071'},
		{day:7, externalDate:'9th August, 2053', eta:'27th August, 2071'},
		{day:8, externalDate:'19th March, 2055', eta:'15th July, 2070'},
		{day:9, externalDate:'5th October, 2058', eta:'12th September, 2071'},
		{day:10, externalDate:'8th March, 2060', eta:'5th April, 2071'},
		{day:11, externalDate:'14th July, 2062', eta:'18th January, 2071'},
		{day:12, externalDate:'12th July, 2064', eta:'22th August, 2072'},
		{day:13, externalDate:'16th February, 2067', eta:'26th April, 2071'},
		{day:14, externalDate:'26th April, 2071', eta:'Now'},
		{day:14, externalDate:'26th April, 2071', eta:'Now'}
	];
	$scope.getExternalDate = function(){
		return $scope.timelineInfo[$rootScope.currentDay-1].externalDate;
	}
	$scope.getEta = function(){
		return $scope.timelineInfo[$rootScope.currentDay-1].eta;
	}
}]);