(function() {
    'use strict';
    
     angular
        .module("app")
        .factory("notify",  NotifyService);    
     
     function NotifyService() {
    	 var service = {
			 success : success,
             alert : alert,
             info : info,
             danger : danger,
             successOnSave : successOnSave,
             successOnRemove : successOnRemove
         };
         return service;
    	 
         function successOnSave() {
        	 success('Registro salvo com sucesso!');
         }
         
         function successOnRemove() {
        	 success('Registro removido com sucesso!');
         }
         
    	 function success(messageText) {
    		 new PNotify({
 			    title: 'Sucesso',
 			    text: messageText,
 			    type: 'success'
 			});
    	 }
    	 
    	 function alert(messageText) {
    		 new PNotify({
  			    title: 'Alerta',
  			    text: messageText
  			});
    	 }
    	 
    	 function info(messageText) {
    		 new PNotify({
  			    title: 'Informação',
  			    text: messageText,
  			    type: 'info'
  			});
    	 }
    	 
    	 function danger(messageText) {
    		 new PNotify({
 			    title: 'Erro',
 			    text: messageText,
 			    type: 'error'
 			});
    	 }

     }
     
 })(); 