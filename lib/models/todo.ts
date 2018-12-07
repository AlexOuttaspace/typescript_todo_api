import { model, Schema } from 'mongoose'

const TodoSchema = new Schema({
	text: {
		type: String,
		required: 'Todo can\'t be empty',
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

export const Todo = model('Todo', TodoSchema)
