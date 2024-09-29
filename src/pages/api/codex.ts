// pages/api/review.js
import { NextApiRequest, NextApiResponse } from "next";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAuth } from "@clerk/nextjs/server";
import CodeReview from "../../../db/models/CodeReview";
import { connectToMongoDB } from "@/lib/mongodb";

const GEIMINI_API = process.env.GEMINI_API || "";
const genAI = new GoogleGenerativeAI(GEIMINI_API);

const reviewCode = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToMongoDB();
  if (req.method !== "POST")
    res.status(405).json({ err: `Method not allowed ` });
  const { code } = req.body;
  const { userId } = getAuth(req);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Help me fix this code "${code}`;

  const result = await model.generateContent(prompt);

  const title = result.response.text().split("\n")[0];

  const newReview = new CodeReview({
    title,
    userId,
    code,
    review: result.response.text(),
  });
  await newReview.save();
  return res.json({
    code: result.response.text(),
  });
};

export default reviewCode;
