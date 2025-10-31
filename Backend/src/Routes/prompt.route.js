import express from "express"
import {sendPrompt}  from "../Controllers/promt.controller.js"
import userMiddleware from "../Middleware/pormpt.middleware.js"

const router = express.Router()

router.post("/prompt",userMiddleware,sendPrompt)

export default router