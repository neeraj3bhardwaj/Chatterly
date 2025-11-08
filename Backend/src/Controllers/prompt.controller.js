import OpenAI, { NotFoundError } from "openai";
import prompt from "../Models/prompt.model.js"

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY,
});

export const sendPrompt = async (req,res) => {
    const {content} = req.body()
    const userId = req.userId

    if(!content || content === "") {
        res.status(400).json({error:"input prompt required !!"})
    }

    try {
        // save user prompt to DB
        const userPrompt = await prompt.create({
            userId,
            role:user,
            content
        })

        // sending to openAI
        const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: content }],
        model: "deepseek-chat",
        });
    
        // ai response
        const aicontent = completion.choices[0].message.content;

        // save aiContent to DB
        const aiPrompt = await prompt.create({
            userId,
            role : assistant,
            content : aicontent
        })
        return res.status(201).json({reply:aicontent})
    } catch (error) {
        console.log("error in response", error);
        return res.status(401).json({error:error})
    }
}