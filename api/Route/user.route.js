import express from 'express';
import { test } from '../UserController/user.controller.js';
import { verifyToken } from '../utils/VerifyUser.js';
import updateUser from '../UserController/user.controller.js'
const router = express.Router();

router.get('/test', test)

// create an API for updating the User Profile Data
router.post('/update/:id', verifyToken, updateUser);
router.get('/listing/', getUserListing);
export default router;




