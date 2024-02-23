
import user from '../Usermodel/user.model.js'
import jwt from 'jsonwebtoken';

import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = new user({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json("user created sucessfully!");
  } catch (err) {
    next(err)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // findOne is a mongoDB method from user schema
    const validUser = await user.findOne({ email });
    if (!validUser) return (
      next(errorHandler(404, 'User not Found!')));

    // Check if the provided password matches the stored password hash


    const validPassword = password === validUser.password
    if (!validPassword) return next(errorHandler(404, 'Wrong Credentials!'));


    // AUTHENTICATE THE USER 
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    console.log(token);
    // save this token as cookie
    res.cookie('access_token', token, { httpOnly: true, secure: true }).status(200).json(validUser);
  } catch (error) {
    next(error);
  }
}



export const updateUser = async(req,res,next) =>{
  try{
   const user = await user.findOne({email: req.body.email})
   if(user){
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    const {password: pass,...rest} = user._doc;
    res.cookie('acess_token',token)
   }
  }
  catch(error){

  }
}