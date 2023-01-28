import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
	// const user = await User.findAll();
	console.log(req.body);
	res.json({ msg: 'api/users' });
};

export const gettUser = async (req: Request, res: Response) => {};

export const postUser = async (req: Request, res: Response) => {
	const { email } = req.body;

	try {
		const existEmail = await User.findOne({ email });
		console.log(existEmail);
		if (existEmail) {
			return res.status(400).json({
				msg: `Ya existe un usuario con el email: ${email}`,
			});
		}

		const user = new User(req.body);
		const saved = await user.save();
		res.json({ msg: `Usuario creado: ${saved}` });
	} catch (error) {
		res.status(500).json({ msg: 'Error al guardar el usuario, hable con el administrador.' });
	}
};

export const putUser = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};
