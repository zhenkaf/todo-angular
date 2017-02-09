var app = angular.module('app', []);
app.controller('todoCtrl', function($scope){

	$scope.inpts = [];

	$scope.howManyCheckeds = function(){
		$scope.trueCountCheckeds = 0;
		$scope.falseCountCheckeds = 0;
		if(localStorage.getItem("todo")) {
			var todoRows = JSON.parse(localStorage.getItem("todo"));
			for(i = 0; i < todoRows.length; i++){
				var valPropertyChe = todoRows[i].checked;
				if (valPropertyChe == false){
					$scope.falseCountCheckeds++;
				}
				else {
					$scope.trueCountCheckeds++;
				}
			}
		}
	};
	if(localStorage.getItem("todo")) {
		var todoRows = JSON.parse(localStorage.getItem("todo"));
		for(i = 0; i < todoRows.length; i++){
			var valPropertyRow = todoRows[i].text;
			var valPropertyChe = todoRows[i].checked;
			var info = {
				text: valPropertyRow,
				checked: valPropertyChe
			};
			$scope.inpts.push(info);
		}
		$scope.howManyCheckeds();
	}
	$scope.change = function(row, checked, index){
		$scope.saveElem(row, checked, index);
		$scope.howManyCheckeds();
	};
	$scope.local = function() {
		if (localStorage.getItem("todo") != undefined) {
			var inLocMas = {
				text: '',
				checked: false
			};
			var todoRows = JSON.parse(localStorage.getItem("todo"));
			todoRows.push(inLocMas);
			var serialTodoRows = JSON.stringify(todoRows);
			localStorage.setItem("todo", serialTodoRows);
		}
		else {
			var locStorMas = [];
			var inLocMas = {
				text: '',
				checked: false
			};
			locStorMas.push(inLocMas);
			var todoRows = JSON.stringify(locStorMas);
			localStorage.setItem("todo", todoRows);
		}
	};
	$scope.add = function() {
		var info = {
			text: '',
			checked: false
		};
		$scope.inpts.push(info);
		$scope.local();
		$scope.howManyCheckeds();
	};
	$scope.delElem = function(index){
		var todoRows = JSON.parse(localStorage.getItem("todo"));
		todoRows.splice(index, 1);
		var serialTodoRows = JSON.stringify(todoRows);
		localStorage.setItem("todo", serialTodoRows);
		$scope.inpts.splice(index, 1);
		$scope.howManyCheckeds();
	};
	$scope.saveElem = function(row, checked, index){
		var obj = {
			text : row,
			checked : checked
		};
		var todoRows = JSON.parse(localStorage.getItem("todo"));
		todoRows.splice(index, 1, obj);
		var serialTodoRows = JSON.stringify(todoRows);
		localStorage.setItem("todo", serialTodoRows);
	};
});

