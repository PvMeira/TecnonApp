(function(){	
	'use strict';

	angular.module('app')
		.controller("UserAddController", ['$scope', '$location', '$resource', 'notify', 'UserService', UserAddController])
		.controller("UserEditController", ['$scope', '$location', '$resource', '$routeParams', 'notify', 'UserService', UserEditController])
		.controller("UserListController", ['$scope', '$location', '$resource', 'notify', 'UserService', UserListController]);
	
	function UserAddController($scope, $location, $resource, notify, UserService){
		var self = this;
		$scope.user = new User();  
		
		function User(id, login, mail) {
			this.id = id;
		    this.login = login;
		    this.mail = mail;
		}
		
		$scope.submitForm = save;
		
		function save() {
        	$resource('/users/').save($scope.user,
	    		function(data, status) {
	    			$location.path('/userlist');
	    			notify.successOnSave();
	        	}, 
	        	function(data, status) {
	        		$scope.message = "Não foi possível Salvar o registro.";
	        	});
        }   
	}
	
	function UserEditController($scope, $location, $resource, $routeParams, notify, UserService){
		var self = this;
		$scope.user = $resource('/users/:id').get({id:$routeParams.id});
		
		$scope.submitForm = save;
		
		function save() {
        	$resource('/users/:id', { id: '@_id' }, {
        	    update: {
        	        method: 'PUT'
        	      }
        	    }).update($scope.user,
	    		function(data, status) {
	    			$location.path('/userlist');
	    			notify.successOnSave();
	        	}, 
	        	function(data, status) {
		        		$scope.message = "Não foi possível Alterar o registro.";
	        	});
        }   
	}
	
    function UserListController($scope, $location, $resource, notify, UserService){
    	var self = this;
        $scope.user;  

        $scope.removeUser = removeUser;
        $scope.selectUser = selectUser;
        
        init();
        
        function init() {
        	getUsers();
        }        
        
        function getUsers(){
        	$resource('/users/').query(function(result) {
        		$scope.items = result;
        	});
        }
        
        function selectUser(user) {
        	$scope.user = user;
        }
        
        function removeUser() {
        	if ($scope.user) {
	        	$resource('/users/:id').delete({id:$scope.user.id},
	        		function(data) {
		        		var index = $scope.items.indexOf($scope.user);
		        		$scope.items.splice(index, 1);
		        		notify.successOnRemove();
	        		});
        	}
        }    
        
    }     	
})();