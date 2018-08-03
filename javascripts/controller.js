var TaskController = function($timeout) {
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
			var clearUpdateMsg = function() {
				controller.updateMessage = '';
			}

			if (controller.updateMessagePromise)
				$timeout.cancel(controller.updateMessagePromise);

			controller.updateMessagePromise = $timeout(clearUpdateMsg, 5000);
		}
	}
	controller.tasks = [ 'Task 1', 'Task 2', 'Task 3' ];
	controller.newTask = '';
	controller.updateMessage = '';
	controller.updateMessagePromise;

}

angular.module('MyApp', []).controller('TaskController', TaskController);
