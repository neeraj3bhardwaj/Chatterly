import { User } from "../Models/user.model.js";
import bcrypt from  "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const signup = async (req,res) => {
    const {firstName, lastName, email, password} = req.body;
    try {
        const user = await User.findOne({email:email})
        if(user) {
            return res.status(401).json({errors:"user already exist"});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newuser = new User({firstName, lastName, email, password:hashPassword})
        await newuser.save()
        return res.status(201).json({message:"user signup successfull"});
    } catch (error) {
        console.log("Error in signup : ", error);
        return res.status(501).json({errors:"Error in SignUp"});
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({ errors: "Invalid Credentials..." });
        }

        const isPassCorrect = await bcrypt.compare(password, user.password);
        if (!isPassCorrect) {
            return res.status(403).json({ errors: "Invalid Credentials..." });
        }
        const token = jwt.sign({ id: user._id }, config.JWT_USER_PASSWORD, {
    expiresIn: "1d"
});

const cookieOption = {
    expires: new Date(Date.now() + 24*60*60*1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict"
};

res.cookie("jwt", token, cookieOption);

return res.status(200).json({
    message: "User logged in successfully...",
    user,
    token,
    tokenExpiry: cookieOption.expires
});

    } catch (error) {
        console.log("Error in login : ", error);
        return res.status(500).json({ errors: "Error in login" });
    }
};


export const logout = (req,res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({message:"Logged out Successfully..."});
    } catch (error) {
        console.log("Error in login : ", error);
        return res.status(500).json({ errors: "Error in logging out..." });
    }
}