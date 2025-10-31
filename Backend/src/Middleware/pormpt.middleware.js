import jwt from "jsonwebtoken"
import config from "../config.js"

export default userMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startswith("Bearer")) {
        return res.status(500).json({errors:"No Authentication token provided !!"})
    }
    const token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(config.JWT_USER_PASSWORD)
        req.userId = decoded.id
        next()
    } catch (error) {
        return res.status(401).json(errors="invalid token !!")
    }
}
