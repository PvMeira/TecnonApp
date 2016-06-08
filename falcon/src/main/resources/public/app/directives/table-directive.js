(function(){	
	'use strict';
	
	angular.module('app')
		.directive('tablepl', function($parse) {
			return {
				scope : {
					selectaction: '&', //Na declaração do atributo, obrigatoriamente o parametro precisa ser 'item'. Ex.: 'selectUser(item)'
					removeaction: '&',
					registers: '=',
					columntitles: '=',
					valuestolist: '='
				},
				restrict : 'E',
				
				template : 
					"<div class='panel panel-default table-panel'>"+
					  	"<div class='panel-body'>"+
							"<table class='table table-striped table-hover'>"+
							    "<thead>"+
							    	"<tr class='table-title'>" +
								        "<td ng-repeat='item in columntitles'>"+
									    	"{{item}}"+
								        "</td>"+
							            "<th style='width: 240px;'>Ações</th>"+
						            "</tr>"+
							    "</thead>"+
							    "<tbody>"+
							        "<tr ng-repeat='item in registers'>"+
							        	"<td ng-repeat='value in valuestolist'>" +
							        		"{{item[value]}}" +
							        	"</td>" +
							            "<td>"+
							            	"<a href='#useredit' ng-click='fireSelectAction(item)' class='btn btn-primary' style='margin-right: 5px;' >" + 
							            		"Editar <span class='glyphicon glyphicon-edit' aria-hidden='true'></span>" +
							            	"</a>"+
							            	"<tableremovebutton selectaction='fireSelectAction(item)' removeaction='removeaction()'></tableremovebutton>"+
							            "</td>"+           
							        "</tr>"+
							    "</tbody>"+
							"</table>"+  
					    "</div>"+
					    "<div class='panel-footer table-footer'>"+
					    	"Registros: {{items.length}}" +
					   	"</div>"+
					"</div>",
				
				link : function(scope, elem, attrs) {
					scope.fireSelectAction = function(item) {
						scope.selectaction({item: item});
					}
					
					scope.fireRemoveAction = function() {
						scope.removeaction();
					}
				}
			};
		});
})();