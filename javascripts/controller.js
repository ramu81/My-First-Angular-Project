var TaskController = function() {
	var controller = this;
	controller.addNewTask = function() {
		controller.tasks.push(controller.newTask);
		controller.newTask = '';
	}
	controller.tasks = [ 'Task 1', 'Task 2', 'Task 3', 'Task 4' ];
	controller.newTask = '';
}

angular.module('MyApp', []).controller('TaskController', TaskController);
