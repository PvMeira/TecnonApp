(function(){	
	'use strict';

	angular.module('app')
		.controller('Navigation',['$rootScope', '$http', '$location', login]);
	
	function login ($rootScope, $http, $location) {
		
		var self = this;
		$rootScope.authenticated = true;
		
		self.login = function() {
			$rootScope.authenticated = true;
		};
		
		self.logout = function() {
			$rootScope.authenticated = false;
			$location.path("/");
		}	
	}	
	
})();