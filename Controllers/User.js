import { User } from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// Registration logic here

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || email == "" || password == "")
    return res.json({ message: "All fields are required" });

  let user = await User.findOne({ email });

  if (user) 
    return res.json({ message: "User already exists", success: false });

  const hasedPassword = await bcrypt.hash(password,   10);
  user = await User.create({ name, email, password : hasedPassword });
  res.json({
    message: "User Registered Successfully",
    success: true,
    data: user,
  });
}
// Login logic here

export const login = async (req, res) => {
  const { email, password } = req.body;

  if(email == "" || password == ""){
    return res.json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User does not exist", success: false });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if(!isValidPassword){
    return res.json({ message: "Invalid Password", success: false });
  }

  const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({ 
    message: "User Logged In Successfully",
    success: true,
    token
  });

}
