import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Route/user.route.mjs';
import authRouter from './Route/auth.route.mjs';



dotenv.config();
const mongoURL = process.env.MONGO;
mongoose.connect(mongoURL).then(() => {
  console.log("Connected to MongoDB!!");
}).catch((err) => {
  console.log(err);
})
const app = express();


app.listen(3000, () => {
  console.log('server os running on port 3000');
})
app.use(express.json())
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);



