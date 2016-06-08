(function(){	
	'use strict';

	angular
		.module('app',['ngRoute',  'ngResource', 'ngMessages'])
		.config(['$routeProvider', '$httpProvider', viewRouter])
		.controller('Home', ['$http', homeController])
        .factory('GlobalService', ['$location', GlobalService])
        .run(function($rootScope, GlobalService) {
            $rootScope.service = GlobalService;  
        }); 		

	function viewRouter($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'Home as controller'
		})
		.when('/userlist', {
			templateUrl : 'views/user/userList.html',
			controller : 'UserListController as controller'
		})	
		.when('/usernew', {
			templateUrl : 'views/user/userAddForm.html',
			controller : 'UserAddController as controller'
		})	
		.when('/useredit/:id', {
			templateUrl : 'views/user/userEditForm.html',
			controller : 'UserEditController as controller'
		})	
		.otherwise('/');
		
		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';		
	}	
	
	function homeController($http){
		var self = this;
	}
	
    function GlobalService ($location) {
        var service = {
            go : go
        };        
        function go(path) {
        		$location.search({});
                $location.path( path ); 
        }
        return service;    
    } 	
	
})();