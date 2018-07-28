var TaskController = function() {
	var controller = this;
	controller.isValidNewTask = function() {
		return controller.newTask.trim() !== '';
	}
	controller.addNewTask = function() {
		controller.updateMessage = '';
		if (controller.isValidNewTask()) {
			controller.tasks.push(controller.newTask);
			controller.newTask = '';
			controller.updateMessage = 'New Task Added !!! ';
		}
	}
	controller.tasks = [ 'Task 1', 'Task 2', 'Task 3' ];
	controller.newTask = '';
	controller.updateMessage = '';
}

angular.module('MyApp', []).controller('TaskController', TaskController);
