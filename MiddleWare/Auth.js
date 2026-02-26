import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js';
export const isAuthenticated = async (req,res,next) =>{

  const token = req.header('Auth')

  //console.log("Check token =", token);

  if(!token)
    return res.json({message : "Login first" , success : false});

  const decoded = jwt.verify(token, "!23#@%$#@$");

  const id = decoded.userId;
  //console.log("Token data" , decoded);

  let user = await User.findById(id);

  if(!user) return res.json({message : "User not found"});

  req.user = user;

  next();
}