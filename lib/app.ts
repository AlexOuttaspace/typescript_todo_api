// lib/app.ts
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as mongoose from 'mongoose'
import { Routes } from './routes'

class App {

	public app: express.Application
	public routePrv: Routes = new Routes()
	public mongoUrl: string = 'mongodb://localhost/ts_todo'

	constructor () {
		this.app = express()
		this.config()
		this.routePrv.routes(this.app)
		this.mongoSetup()
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise
		mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
		mongoose.connection
			.once('open', () => console.log('Connection to database established'))
			.on('error', (error: any) => console.log(`Error while connection to database: ${error}`))
	}

	private config(): void {
		this.app.use(bodyParser.json())
	}
}

export default new App().app
