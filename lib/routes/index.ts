import { Request, Response } from 'express'
import { Todo } from './todo'

const mockTodos: Todo[] = [
	{
		completed: false,
		id: 1,
		text: 'Walk a dog',
	},
	{
		completed: false,
		id: 2,
		text: 'Realize the meaningless of life',
	},
	{
		completed: false,
		id: 3,
		text: 'Create a todo-list app',
	},
]

export class Routes {
	public routes(app): void {

	app
			.route('/')
			.get((req: Request, res: Response): void => {
				res.status(200).send({
					message: 'GET request passed successfully!',
				})
			})

	app
			.route('/todos')
			.get((req: Request, res: Response): void => {
				res.status(200).json(mockTodos)
			})
			.post((req: Request, res: Response): void => {
				const text: string = req.body.text

				const lastId: number = mockTodos[mockTodos.length - 1].id

				const newTodo: Todo = new Todo(lastId + 1, text, false)

				mockTodos.push({ text, id: lastId + 1, completed: false })
			})
	}
}
