(function(){	
	'use strict';

    angular.module("app")
		.config(['$routeProvider', '$httpProvider', viewRouter])
		;
	
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
		
		.when('/customerlist', {
			templateUrl : 'views/customer/customerList.html',
			controller : 'CustomerListController as controller'
		})	
		.when('/customernew', {
			templateUrl : 'views/customer/customerAddForm.html',
			controller : 'CustomerAddController as controller'
		})	
		.when('/customeredit/:id', {
			templateUrl : 'views/customer/customerEditForm.html',
			controller : 'CustomerEditController as controller'
		})	
		
		.otherwise('/');
		
		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';		
	}	
		
})();