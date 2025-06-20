import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

const protectRoute = async (req, res, next) => {
  try {
    //get token
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //find the user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "Token is invalid" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error", error.message);
    res.status(401).json({ message: "Token is invalid" });
  }
};

export default protectRoute;
