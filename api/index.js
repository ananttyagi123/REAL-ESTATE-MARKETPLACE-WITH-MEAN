import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Route/user.route.js';
import authRouter from './Route/auth.route.js';


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



 var fs = require('fs');
 var data = 'this is the Node.js Class';

//create the data to the stream within encoding to be UTF - 8
writer.on('finish', function () {
  console.log("write completed");
})

var data = '';
ReadStream.setEncoding(data, 'UTF-8')
ReadStream.on('data', function (chunk) {
  data = chunk;
})

ReadStream.on('end', function () {
  console.log(data.toString);
})

var zlib = require('zlib');
var crot = zlib.createBrotliCompress();
var r = fs.create.ReadStream("test.txt");
var w = fs.createWriteStream("test.txt.gz");
r.pipe(brot).pipe(w);
r.pipe(brot).pipe(w);


var zlib = require('zlib');
var delf = zlib.createDeflate('test.txt');
var fs = fs.create.ReadStream('test.tst.gz');
var r = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);


var zlib = require('zlib');
var delf = zlib.createDeflate('test.txt');
var fs = fs.create.ReadStream('test.tst.gz');
var r = fs.createWriteStream('test.txt.gz');
r.pipe(defl).pipe(w);



