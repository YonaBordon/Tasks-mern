import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db';

const app = express();

dotenv.config();

connect();

const PORT: string = process.env.PORT || '4000';

app.listen(PORT, () => {
	console.log(`Servidor corriendo: puerto: ${PORT}`);
});
