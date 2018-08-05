var TaskController = function($filter) {
	var controller = this;
	var createEmptyTask = function() {
		return {
			name : ' ',
			month : 01,
			day : 01,
			year : 2016
		};
	}
	controller.tasks = [ {
		name : 'Task A',
		month : 01,
		day : 06,
		year : 2016
	}, {
		name : 'Task A',
		month : 15,
		day : 12,
		year : 2015
	}, {
		name : 'Task B',
		month : 01,
		day : 06,
		year : 2016
	}, {
		name : 'Task B',
		month : 15,
		day : 12,
		year : 2015
	} ];
	controller.getTasks = function() {
		var orderBy = $filter('orderBy');
		return orderBy(controller.tasks, '[year,month,day,name]', false);
	}
	controller.addTask = function() {
		controller.tasks.push(controller.newTask);
		controller.newTask = createEmptyTask();
	}
	controller.deleteTask = function(task) {
		var index = controller.tasks.indexOf(task);
		if (index > -1) {
			controller.tasks.splice(index,1);
		}
	}
	
	controller.newTask = createEmptyTask();
	
	controller.disableAddTask = function() {
		return controller.newTask.name.trim() === '';
	}
	
}

angular.module('todoApp', [])
	   .controller('TaskController', TaskController);