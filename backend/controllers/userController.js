import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//POST REQ // AUTHENTICATE // PUBLIC
const authUser = asyncHandler(async, (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            collection: user.collection,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error("User email or password is incorrect");
    }
});

//POST REQ // REGISTER NEW USER // PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password }
})