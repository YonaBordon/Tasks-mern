import { Router } from 'express';
import { deleteUser, gettUser, getUsers, postUser, putUser } from '../controllers/usersController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', gettUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;
