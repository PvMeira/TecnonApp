(function(){	
	'use strict';

	angular.module('app')
		.controller("UserController", ['$scope', '$location', '$resource', 'notify', 'UserService', UserController]);
	
    function UserController ($scope, $location, $resource, notify, UserService){
    	var self = this;
        $scope.user;  
        $scope.message = null;

        $scope.submitForm = saveUser;
        $scope.removeUser = removeUser;
        $scope.selectUser = selectUser;
        
        init();
        
        function init() {
        	clearUser();
        	getUsers();
        }        
        
        function User(id, user, role) {
        	this.id = id;
            this.user = user;
            this.role = role;
        }
        
        function clearUser() {
        	$scope.user = new User();
        }
        
        function getUsers(){
	    	UserService.getUsers().query(null, 
	            function(result) {
	                $scope.items = result;                       
	            })        	
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
		        		clearUser();
		        		notify.successOnRemove();
	        		});
        	}
        }    
        
        function saveUser() {
        	$resource('/users/').save($scope.user,
	    		function(data, status) {
	    			$scope.items.push($scope.user);
	    			clearUser();
	    			$location.path('/userlist');
	    			notify.successOnSave();
	        	}, 
	        	function(data, status) {
	        		$scope.message = "Não foi possível cadastrar o registro.";
	        	});
        }   
    }     	
})();