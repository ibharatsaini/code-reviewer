// pages/api/review.js
import { NextApiRequest, NextApiResponse } from "next";


const AllTest = async (req: NextApiRequest, res: NextApiResponse) => {
//   await connectToMongoDB();
  if (req.method !== "GET")
    res.status(405).json({ err: `Method not allowed ` });
  //   const { code } = req.body;
//   const { userId } = getAuth(req);

//   const codereview = new CodeReview();
//   const reviews = await CodeReview.find({ userId }).sort({ createdAt: -1 });
console.log(req.headers)
  return res.json({
    success: "Successfully fetched all reviews",
  });
};

export default AllTest;
