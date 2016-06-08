(function() {
    'use strict';
    
     angular
        .module("app")
        .factory("UserService",  ['$resource', UserService]);       
       
        function UserService ($resource) {
            var urlBase = '/users/';
            
            var service = {
            		getUsers : getUsers,
                remove : remove,
                persist : persist
            };
            return service;
            
            
            function getUsers(){
                return $resource(urlBase + "findall",null,
                    {'get': { method: 'GET'}, isArray:true});      
            };
            
            
            function persist(){
                return $resource(urlBase+ "save",{
                     id : '@id', 
                	 user: '@user', 
                	 role: '@role'
                });      
            };  
            
            
            function remove(){
                return $resource(urlBase+ "delete/:id");
            };              
        }    
})();        