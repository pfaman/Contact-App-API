import express from "express";
import { register, login } from "../Controllers/User.js";
const router  = express.Router();

// User Register
// @api dsc :- User Registration
// @api method :- POST
// @api endpoint :- /api/user/register

router.post("/register", register);


// User Login
// @api dsc :- User Login
// @api method :- POST
// @api endpoint :- /api/user/login

router.post("/login", login);

export default router;