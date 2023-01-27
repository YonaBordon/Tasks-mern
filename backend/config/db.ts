import mongoose, { ConnectOptions } from 'mongoose';

const connect = async () => {
	try {
		mongoose.set('strictQuery', false);
		const connection: mongoose.Mongoose = await mongoose.connect(`${process.env.DB_CONN_STRING}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions);
		const url = `${connection.connection.host}:${connection.connection.port}`;
		console.log(`MongoDB conectado: ${url}`);
	} catch (error) {
		console.log(`Error: ${error}`);
		process.exit(1);
	}
};

export default connect;
