(function(){	
	'use strict';

	angular.module('app')
		.controller("UserAddController", ['$scope', 'UserService', UserAddController])
		.controller("UserEditController", ['$scope', '$routeParams', 'UserService', UserEditController])
		.controller("UserListController", ['$scope', 'UserService', UserListController]);
	
	function UserAddController($scope, UserService){
		var self = this;
		$scope.user = new User();  
		
		function User(id, login, mail) {
			this.id = id;
		    this.login = login;
		    this.mail = mail;
		}
		
		$scope.submitForm = save;
		function save() {
			UserService.save($scope, $scope.user);
        }   
	}
	
	function UserEditController($scope, $routeParams, UserService){
		var self = this;
		$scope.user = UserService.findById($routeParams.id);
		
		$scope.submitForm = save;
		function save() {
			UserService.update($scope, $scope.user);
        }   
	}
	
    function UserListController($scope, UserService){
    	var self = this;
        $scope.user;  

        $scope.removeUser = removeUser;
        $scope.selectUser = selectUser;
        
        init();
        
        function init() {
        	findAll();
        }        
        
        function findAll(){
        	$scope.items = UserService.findAll();
        }
        
        function selectUser(user) {
        	$scope.user = user;
        }
        
        function removeUser() {
        	UserService.remove($scope.user, $scope.items);
        }    
        
    }     	
})();