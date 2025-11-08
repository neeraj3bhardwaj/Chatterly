import express from "express"
import {sendPrompt}  from "../Controllers/prompt.controller.js"
import userMiddleware from "../Middleware/prompt.middleware.js"

const router = express.Router()

router.post("/prompt",userMiddleware,sendPrompt)

export default router