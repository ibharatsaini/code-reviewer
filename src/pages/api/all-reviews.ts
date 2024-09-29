// pages/api/review.js
import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import CodeReview from "../../../db/models/CodeReview";
import { connectToMongoDB } from "@/lib/mongodb";

const AllReview = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToMongoDB();
  if (req.method !== "GET")
    res.status(405).json({ err: `Method not allowed ` });
  //   const { code } = req.body;
  const { userId } = getAuth(req);

//   const codereview = new CodeReview();
  const reviews = await CodeReview.find({ userId }).sort({ createdAt: -1 });
  return res.json({
    data: reviews,
  });
};

export default AllReview;
