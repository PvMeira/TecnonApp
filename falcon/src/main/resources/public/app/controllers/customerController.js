(function(){	
	'use strict';

	angular.module('app')
		.controller("CustomerAddController", ['$scope', 'CityService', 'CustomerService', CustomerAddController])
		.controller("CustomerEditController", ['$scope', '$routeParams', 'CustomerService', CustomerEditController])
		.controller("CustomerListController", ['$scope', 'CustomerService', CustomerListController]);
	
	function CustomerAddController($scope, CityService, CustomerService){
		var self = this;
		$scope.register = new Register();  
		
		function Register(id, name, document, observation) {
			this.id = id;
		    this.name = name;
		    this.document = document;
		    this.observation = observation;
		}
		
		$scope.submitForm = save;
		function save() {
			CustomerService.save($scope, $scope.register);
        }   
		
//		function allCities() {
//			return CityService.findAll();
//		}
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