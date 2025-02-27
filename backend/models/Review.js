import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    fountainId: {
      type: Number,
      required: true,
    },
    tasteRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    coldnessRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      // optional review, defaults to empty string
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt fields
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
