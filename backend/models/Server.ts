import express, { Application } from 'express';
import userRoutes from '../routes/User';

import connect from '../config/db';
import dotenv from 'dotenv';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		users: 'api/users',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '4000';

		this.dbConnection();
	}

	async dbConnection() {
		dotenv.config();
		await connect();
	}

	routes() {
		this.app.use(this.apiPaths.users, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo: puerto: ${this.port}`);
		});
	}
}

export default Server;
