(function(){	
	'use strict';

	angular.module('app')
		.controller("CityAddController", ['$scope', 'CityService', CityAddController])
		.controller("CityEditController", ['$scope', '$routeParams', 'CityService', CityEditController])
		.controller("CityListController", ['$scope', 'CityService', CityListController]);
	
	function CityAddController($scope, CityService){
		var self = this;
		$scope.register = new Register();  
		
		function Register(id, name, zipCode, country) {
			this.id = id;
		    this.name = name;
		    this.zipCode = zipCode;
		    this.country = country;
		}
		
		$scope.submitForm = save;
		function save() {
			CityService.save($scope, $scope.register);
        }   
	}
	
	function CityEditController($scope, $routeParams, CityService){
		var self = this;
		$scope.register = CityService.findById($routeParams.id);
		
		$scope.submitForm = save;
		function save() {
			CityService.update($scope, $scope.register);
        }   
	}
	
    function CityListController($scope, CityService){
    	var self = this;
        $scope.register;  

        $scope.removeRegister = removeRegister;
        $scope.selectRegister = selectRegister;
        
        init();
        
        function init() {
        	findAll();
        }        
        
        function findAll() {
        	$scope.registers = CityService.findAll();
        }
        
        function selectRegister(register) {
        	$scope.register = register;
        }
        
        function removeRegister() {
        	CityService.remove($scope.register, $scope.registers);
        }    
    }     
    
})();