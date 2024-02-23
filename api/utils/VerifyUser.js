import { jwt } from "jsonwebtoken";
import { errorHandler } from "./error";

export const verifyToken = (req, res, next) => {
  const token = req.cookie.acess_token;

  if (!token) next(errorHandler(401, 'unauthorised'));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (req.user.id === req.param.id) return next(errorHandler(403, 'forbidden'))
    req.user = user;
    next();
  })
}