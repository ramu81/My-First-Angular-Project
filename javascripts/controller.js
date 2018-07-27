var TaskController = function() {
	var controller = this;
	controller.taskList = [ 'Task 1', 'Task 2', 'Task 3', 'Task 4' ];
}

angular.module('MyApp', []).controller('TaskController', TaskController);
