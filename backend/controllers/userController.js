import User from "../models/user.js";

//get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({role:"Developer"});//.sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch(e) {
    console.log(e);
    res.status(400).json({ ErrorAllUsers: e.message })
  }
}

//create/post a Developer User
export const createUser = async (req, res) => {  //console.log(req.body);
  try { 
    const user = await User.create(req.body);
    res.status(200).json(user);
  }catch(e) {
    console.log(e);
    res.status(400).json({ ErrorCrateUser: e.message })
  }
}

//get User Login
export const getUserLogin = async (req, res) => {
  //console.log(req.query);
  try {
    const user = await User.find({userName:req.query.userName, password:req.query.password});
    res.status(200).json(user);
  } catch(e) {
    console.log(e);
    res.status(400).json({ ErrorUserLogin: e.message })
  }
}