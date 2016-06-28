(function(){	
	'use strict';

	angular.module('app')
		.controller("CustomerAddController", ['$scope', 'CustomerService', CustomerAddController])
		.controller("CustomerEditController", ['$scope', '$routeParams', 'CustomerService', CustomerEditController])
		.controller("CustomerListController", ['$scope', 'CustomerService', CustomerListController]);
	
	
	
	function CustomerAddController($scope, CustomerService){
		var self = this;
		$scope.register = new Register();  
		
		function Register(id, name, document, observation, city) {
			this.id = id;
		    this.name = name;
		    this.document = document;
		    this.observation = observation;
		    this.city = city;
		}
		
		$scope.submitForm = save;
		function save() {
			CustomerService.save($scope, $scope.register);
        }   
	}
	
	function CustomerEditController($scope, $routeParams, CustomerService){
		var self = this;
		$scope.register = CustomerService.findById($routeParams.id);
		
		$scope.submitForm = save;
		function save() {
			CustomerService.update($scope, $scope.register);
        }   
	}
	
    function CustomerListController($scope, CustomerService){
    	var self = this;
        $scope.register;  

        $scope.removeRegister = removeRegister;
        $scope.selectRegister = selectRegister;
        
        init();
        
        function init() {
        	findAll();
        }        
        
        function findAll(){
        	$scope.registers = CustomerService.findAll();
        }
        
        function selectRegister(register) {
        	$scope.register = register;
        }
        
        function removeRegister() {
        	CustomerService.remove($scope.register, $scope.registers);
        }    
        
    }     	
})();