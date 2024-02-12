import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Route/user.route.js';
import authRouter from './Route/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
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

// CREATING A MIDDLEWARE


// Define your routes and middleware first...

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
  
});


app.get('/example', (req, res, next) => {
  // Simulate an error
  const err = new Error('Example error');
  err.statusCode = 400;
  next(err); // Pass the error to the error handling middleware
});
