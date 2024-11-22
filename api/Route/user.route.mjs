import express from 'express';
import { test } from '../UserController/user.controller.mjs';
import { verifyToken } from '../utils/VerifyUser.mjs';
import updateUser from '../UserController/user.controller.mjs'
const router = express.Router();

router.get('/test', test)

// create an API for updating the User Profile Data
router.post('/update/:id', verifyToken, updateUser);

export default router;




