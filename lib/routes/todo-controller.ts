import { Request, Response } from 'express'
import { models } from '../models'

export class TodoController {
	public getTodos = async (req: Request, res: Response) => {
		try {
			const allTodos = await models.Todo.find()

			res.status(200).json(allTodos)
		} catch (error) {
			console.log('Error in [TodoController|getTodos]', error)
			res.status(500).send()
		}
	}

	public getTodo = async (req: Request, res: Response) => {
		const id: string = req.params.id
		try {
			const todo = await models.Todo.findById(id)

			res.status(200).json(todo)
		} catch (error) {
			console.log('Error in [TodoController|getTodo]', error)
			res.status(500).send()
		}
	}

	public createTodo = async (req: Request, res: Response) => {
		const text: string = req.body.text
		try {
			const createdTodo = await models.Todo.create({ text })

			res.status(200).json(createdTodo)
		} catch (error) {
			console.log('Error in [TodoController|createTodo]', error)
			res.status(500).send()
		}
	}

	public updateTodo = async (req: Request, res: Response) => {
		const id: string = req.params.id
		const text: string = req.body.text
		const completed: boolean = req.body.completed

		try {
			const updatedTodo = await models.Todo.findByIdAndUpdate(id, { text, completed }, { new: true })

			res.status(200).json(updatedTodo)
		} catch (error) {
			console.log('Error in [TodoController|updateTodo]', error)
			res.status(500).send()
		}
	}

	public deleteTodo = async (req: Request, res: Response) => {
		const id: string = req.params.id
		const text: string = req.body.text

		try {
			await models.Todo.findByIdAndRemove(id)

			res.status(200).send()
		} catch (error) {
			console.log('Error in [TodoController|deleteTodo]', error)
			res.status(500).send()
		}
	}
}
