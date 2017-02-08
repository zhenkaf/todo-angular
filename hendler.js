var app = angular.module('app', []);
app.controller('todoCtrl', function($scope){
	$scope.inpts = [];
	if(localStorage.getItem("todo")) {
		var arrObjects = JSON.parse(localStorage.getItem("todo"));
		for(i = 0; i < arrObjects.length; i++){
			var valPropertyRow = arrObjects[i].a;
			var valPropertyChe = arrObjects[i].b;
			var info = {
				text: valPropertyRow,
				checked: valPropertyChe
			};
			$scope.inpts.push(info);
		}
	}
	$scope.local = function(str, isDone) {
		if (localStorage.getItem("todo") != undefined) {
			var inLocMas = {
				text: str,
				checked: isDone
			};
			var todoRows = JSON.parse(localStorage.getItem("todo"));
			todoRows.push(inLocMas);
			var serialTodoRows = JSON.stringify(todoRows);
			localStorage.setItem("todo", serialTodoRows);
		}
		else {
			var locStorMas = [];
			var inLocMas = {
				text: str,
				checked: isDone
			};
			locStorMas.push(inLocMas);
			var todoRows = JSON.stringify(locStorMas);
			localStorage.setItem("todo", todoRows);
		}
	};


	$scope.add = function(str, isDone) {
		var info = {
			text: str,
			checked: isDone
		};
		$scope.inpts.push(info);
		$scope.local(str, isDone);
	};


	$scope.delElem = function(index){
		var todoRows = JSON.parse(localStorage.getItem("todo"));
		todoRows.splice(index, 1);
		var serialTodoRows = JSON.stringify(todoRows);
		localStorage.setItem("todo", serialTodoRows);
		$scope.inpts.splice(index, 1)
	};

	$scope.saveElem = function(row, checked, index){
		var obj = {
			a : row,
			b : checked
		};
		var n =JSON.parse(localStorage.getItem("todo"));
		n.splice(index, 1, obj);
		var newN = JSON.stringify(n);
		localStorage.setItem("todo", newN);
	};
});

