// models/CodeReview.ts
import mongoose from 'mongoose';

const CodeReviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CodeReview = mongoose.models.CodeReview || mongoose.model('CodeReview', CodeReviewSchema);

export default CodeReview;
