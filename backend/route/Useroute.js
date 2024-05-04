import   express  from 'express';
import {signup,login}  from '../controller/Usercontroller.js';

const userrouter = express.Router() 
userrouter.post("/signup",signup);
userrouter.post("/login",login);

export default  userrouter;