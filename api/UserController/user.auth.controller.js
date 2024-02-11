import user from '../Usermodel/user.model.js'
import bcrypt from 'bcryptjs';
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new user({ username, email, password });
  await newUser.save();
  res.status(201).json("user created sucessfully!");

}