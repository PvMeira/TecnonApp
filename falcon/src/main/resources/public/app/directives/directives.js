(function(){	
	'use strict';

	angular.module('app')
		
		.directive('crudheader', function() {
			return {
				scope : {
					title: '@',
					icon: '@'
				},
				restrict : 'E',
				templateUrl: '/views/directive-templates/crudheader-template.html',
			};
		});
})();