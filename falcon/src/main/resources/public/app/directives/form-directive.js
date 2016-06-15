(function(){	
	'use strict';

	angular.module('app')
		.directive('formalerts', function() {
			return {
				restrict : 'E',
				scope : {
				},
				replace: true,
				templateUrl: '/views/directive-templates/formalerts-template.html',
			};
		})
	
		.directive('inputtext', function() {
			return {
				restrict : 'E',
				scope : {
					label: '@',
					type: '@',
					required: '@',
					ngmodel: '='
				},
				replace: true,
				templateUrl: '/views/directive-templates/inputtext-template.html',
			};
		})
	
		.directive('inputtextarea', function() {
			return {
				restrict : 'E',
				scope : {
					label: '@',
					maxlength: '@',
					required: '@',
					ngmodel: '='
				},
				replace: true,
				templateUrl: '/views/directive-templates/inputtextarea-template.html',
			};
		})
		
		;
		
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