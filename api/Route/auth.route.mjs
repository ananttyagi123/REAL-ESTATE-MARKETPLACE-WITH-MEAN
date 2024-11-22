import express from 'express';
import { signup } from '../UserController/user.auth.controller.mjs';
import { signin } from '../UserController/user.auth.controller.mjs';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);

export default router;
