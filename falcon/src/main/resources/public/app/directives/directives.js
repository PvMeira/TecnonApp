(function(){	
	'use strict';

	angular.module('app')
		
		.directive('crudheader', function() {
			return {
				scope : {
					title: '@',
					icon: '@'
				},
				restrict : 'E',
				
				template : 
					'<div class="page-header">' +
					    '<span class="glyphicon {{icon}}" aria-hidden="true" style="font-size: 50px"></span>' +
					    '<h2 class="page-header-title">{{title}}</h2>' +
					'</div>',
			};
		})
	
		.directive('tableremovebutton', function() {
			return {
				scope : {
					selectaction: '&',
					removeaction: '&'
				},
				restrict : 'E',
				
				template : 
					'<a href="" class="btn btn-danger" ng-click="fireSelectAction()" data-toggle="modal" data-target="#myModal">' +
						'Excluir <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>' +
					'</a>' +
					'<div id="myModal" class="modal fade" tabindex="-1" role="dialog">' +
				  	    '<div class="modal-dialog">' +
							'<div class="modal-content">' +
								'<div class="modal-header">' +
									'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
									'<h4 class="modal-title">Confirmação</h4>' +
								'</div>' +
								'<div class="modal-body">' +
									'<p>Remover registro selecionado?</p>' +
								'</div>' +
								'<div class="modal-footer">' +
									'<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>' +
									'<button type="button" class="btn btn-primary" ng-click="fireRemoveAction()" data-dismiss="modal">Confirmar</button>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>',
				
				link : function(scope, elem) {
					scope.fireSelectAction = function() {
						scope.selectaction();
					}
					
					scope.fireRemoveAction = function() {
						scope.removeaction();
					}
				}
			};
		});
})();