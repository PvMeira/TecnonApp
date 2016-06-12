(function() {
    'use strict';
    
     angular.module("app")
        .factory("UserService",  ['$location', '$resource', 'notify', UserService]);       
       
        function UserService ($location, $resource, notify) {
            var restResource = $resource('/users/' + ':id', { id: '@_id' }, { update: { method: 'PUT' } });
            
            var service = {
        		save: save,
        		update: update,
                remove: remove,
                findAll: findAll,
                findById: findById
            };
            return service;
            
            function save($scope, user){
            	restResource.save(user,
    	    		function(data, status) {
    	    			$location.path('/userlist');
    	    			notify.successOnSave();
    	        	}, 
    	        	function(data, status) {
    	        		$scope.message = "Não foi possível Salvar o registro.";
    	        	});
            };
            
            function update($scope, user){
            	restResource.update(user,
			    		function(data, status) {
			    			$location.path('/userlist');
			    			notify.successOnSave();
			        	}, 
			        	function(data, status) {
			        		$scope.message = "Não foi possível Alterar o registro.";
		        	});
            };  
            
            function remove(user, listFromRemove){
            	if (user) {
	            	restResource.delete({id:user.id},
		        		function(data) {
			        		var index = listFromRemove.indexOf(user);
			        		listFromRemove.splice(index, 1);
			        		notify.successOnRemove();
		        		});
            	}
            };      
            
            function findAll(){
            	return restResource.query(function(result) {
            		return result;
            	});
            };
            
            function findById(userId){
            	return restResource.get({id:userId})
            };
        }    
})();        