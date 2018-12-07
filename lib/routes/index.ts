import { TodoController } from './todo-controller'

export class Routes {
	public todoController: TodoController = new TodoController()

	public routes(app): void {
		app
			.route('/todos')
			.get(this.todoController.getTodos)
			.post(this.todoController.createTodo)

		app
			.route('/todos/:id')
			.get(this.todoController.getTodo)
			.put(this.todoController.updateTodo)
			.delete(this.todoController.deleteTodo)
	}
}
