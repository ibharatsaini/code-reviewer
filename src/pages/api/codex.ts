// pages/api/review.js
import { NextApiRequest, NextApiResponse } from 'next';

import { LanguageServiceClient } from '@google-cloud/language';
import { GoogleGenerativeAI } from '@google/generative-ai'
import { getAuth } from '@clerk/nextjs/server';
import CodeReview from '../../../db/models/CodeReview';
import { connectToMongoDB } from '@/lib/mongodb';


// const openai= new OpenAI({
//     apiKey: "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"
// })

const GEIMINI_API = process.env.GEMINI_API || ''
const genAI = new GoogleGenerativeAI(GEIMINI_API);

const reviewCode = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToMongoDB()
  if(req.method !== 'POST') res.status(405).json({err:`Method not allowed `})
  const { code } = req.body;
  const { userId } = getAuth(req)
  // console.log(code,'code')
  // const response = await openai.chat.completions.create({
  //   model: 'gpt-4o-mini',
  //   messages: [
  //       {"role": "system", "content": "You are an expert coder of all the programming languages."},
  //       {"role": "user", "content": `Help me fix this code "${code}"`}
  //   ]
  // });
  // console.log(response)

  // return res.json(response.choices[0])
  // const client = new LanguageServiceClient();

  //   // Analyze the code using the Gemini API.
  //   const [result] = await client.analyzeSentiment({
  //     document: {
  //       content: code,
  //       type: 'PLAIN_TEXT',
  //     },
  //   });;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Help me fix this code "${code}`;

const result = await model.generateContent(prompt);

const title = result.response.text().split("\n")[0]

const newReview = new CodeReview({
  title,
  userId,
  code,
  review: result.response.text()
})
await newReview.save()
return res.json({
  code: result.response.text()
})

};


export default reviewCode;