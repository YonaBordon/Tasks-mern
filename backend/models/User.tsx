import { Schema } from 'mongoose';
import mongoose from 'mongoose';

interface IUser {
	name: string;
	password: string;
	email: string;
	token: string;
	confirmed: boolean;
}

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		token: {
			type: String,
		},
		confirmed: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }, //agrega creado y actualizado
);

const User = mongoose.model('User', userSchema);
export default User;
