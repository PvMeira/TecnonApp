(function(){	
	'use strict';

	angular.module('app')
		.directive('inputform', function() {
			return {
				restrict : 'E',
				scope : {
					label: '@',
					type: '@',
					required: '@',
					ngmodel: '='
				},
				replace: true,
				templateUrl: '/views/directive-templates/inputform-template.html',
			};
		});
	
//		.directive('formpl', function() {
//			return {
//				scope : {
////					title: '@',
////					icon: '@',
////					submitaction: '&',
////					formtemplateurl: '@'
//				},
//				transclude: true,
//				restrict : 'E',
//				templateUrl: '/views/directive-templates/formpl-template.html',
//				
//				link : function(scope, elem, attrs, Controller) {
//					scope.fireSubmitAction = function() {
//						console.log('FOI');
////						scope.submitaction();
//					}
//				}
//			};
//		});
})();