import User from "../model/USer,odel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashpass = await bcryptjs.hash(password, 10);
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashpass,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" ,
      user:{
        id:newUser._id,
        fullname:newUser.fullname,
        email:newUser.email
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) =>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    res.status(200).json({ message: "Logged in successfully"
    ,user:{
      id:user._id,
      fullname:user.fullname,
      email:user.email
    } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}