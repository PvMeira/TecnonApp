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
		})
		
		.directive('dialogconfirm', function() {
			return {
				scope : {
					modalid: '@',
					text: '@',
					action: '&'
				},
				restrict : 'E',
				templateUrl: '/views/directive-templates/dialog-confirm-template.html',
				link : function(scope, elem) {
					scope.fireConfirmAction = function() {
						scope.action();
					}
				}
			};
		})
		
		;
})();