import user from '../Usermodel/user.model.js'
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
    const validUser = user.findOne({ email });
    if (!validUser) return next(errorhandler(404, 'User not Found!'))
  } catch (err) {
    next(err);
  }
}