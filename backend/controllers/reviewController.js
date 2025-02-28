import Review from "../models/Review.js";
import Fountain from "../models/fountain.js";
import User from "../models/user.js";
import Building from "../models/building.js";

export const addReview = async (req, res) => {
  // get userId from the authenticated token
  const userId = req.user.userId;
  const { fountainId, tasteRating, coldnessRating, review } = req.body;

  console.log("Attempting to add review with data:", {
    userId,
    fountainId,
    tasteRating,
    coldnessRating,
    review,
  });

  try {
    // check if fountain exists
    const fountain = await Fountain.findById(fountainId);
    if (!fountain) {
      console.log("Fountain not found:", fountainId);
      return res.status(404).json({ message: "Fountain not found" });
    }

    const newReview = new Review({
      userId,
      fountainId,
      tasteRating,
      coldnessRating,
      review,
    });

    // save the review to the reviews collection in the database
    await newReview.save();
    console.log("Review saved:", newReview);

    // and update fountain's reviews array
    fountain.reviews.push(newReview._id);
    await fountain.save();

    // get the user who made the review
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    // and update the user's reviews array
    user.reviews.push(newReview._id);
    await user.save();

    res.status(201).json({
      message: "Review submitted successfully",
      review: newReview,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error, try again." });
  }
};

export const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    // find the review to get fountainId and userId
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // remove review from fountain's reviews array
    await Fountain.findByIdAndUpdate(review.fountainId, {
      $pull: { reviews: reviewId },
    });

    // remove review from user's reviews array
    await User.findByIdAndUpdate(review.userId, {
      $pull: { reviews: reviewId },
    });

    // remove review from reviews collection
    await Review.findByIdAndDelete(reviewId);

    res.status(200).json({ message: "Review deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, try again." });
  }
};
