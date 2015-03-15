myApp.service('pageService', function() {
	var page = 'info';

	var setPage = function(text) {
		page = text;
		$('#page').hide();
		var t = setTimeout(function(){$('#page').slideDown('slow')},400)
	}

	var getPage = function(){
		return page;
	}
	var getTitle = function(){
		switch(page){
			case 'info':
				return 'About Your Flight';
				break;
			case 'timeline':
				return 'FriendPage Timestream';
				break;
			case 'alerts':
				return 'FriendPage Alerts';
				break;
			case 'messages':
				return 'FriendPage Messages';
				break;
			case 'skimmit':
				return 'Skimmit';
				break;
			default:
				return '';
				break;
		}
	}
	return {
		setPage: setPage,
		getPage: getPage,
		getTitle: getTitle
	};
});