import express from 'express';
import { getUsers, createUser, userInfo, deleteUser, updateUser} from '../controllers/users.js';



const router = express.Router();


//all routes in here starting with  /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', userInfo);

router.delete('/:id', deleteUser);


// .patch is request using to modify one  thing but if u want to modify to whole stuff u can use the put request
router.patch('/:id' ,updateUser);

export default router;