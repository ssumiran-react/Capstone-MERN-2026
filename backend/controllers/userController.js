import User from "../models/user.js";

//getAllUsers
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdDate: -1 });
        res.status(200).json(users);
    } catch(e) {
        console.log(e);
        res.status(400).json({ ErrorAllUsers: e.message })
    }
}