import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fountainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fountain",
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
      // optional review
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
