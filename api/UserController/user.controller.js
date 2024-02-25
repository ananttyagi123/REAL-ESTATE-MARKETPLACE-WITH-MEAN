import { errorHandler } from "../utils/error";
import user from "../Usermodel/user.model";

export const test = (req, res) => {
  res.json({
    message: 'hello world dthis is my routing API for Backend',
  })
}


export const updataUser = async (req, res, next) => {
  console.log("Hello world!");
  if (req.user.id !== req.param.id) return next(errorHandler(402, 'you can only update your own Account!!'))
  try {
    if (req.body.password) {

    }
    const updateUser = await user.findIdAndUpdate(req.param.id, {
      $set: {
        username: req.body.username,
        email: req.body.email,
        avatar: req.body.avatar
      }
    }, { new: true })
    const { password, ...rest } = updateUser._doc;
    res
  } catch (error) {
    console.log(error);
  }
}



export const getUserListing = async (req,res,next)=>{
  if(re.user.id !==req.param.id){
   const Listing = await Listing.find()
  }
  else{
    return next(errorHandler(401,'error'))
  }

}