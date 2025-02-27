import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Review from "./models/Review.js";
import Building from "./models/building.js";
import Fountain from "./models/fountain.js";
import User from "./models/user.js";

dotenv.config(); // get access to .env variables

const app = express();

// basic route to check if server is running
app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// POST route to add a review to the database
app.post("/waterdb", async (req, res) => {
  // user writes a review and presses submit
  const { userId, fountainId, tasteRating, coldnessRating, review } = req.body;

  try {
    // create new review object using the sent info
    const newReview = new Review({
      userId,
      fountainId,
      tasteRating,
      coldnessRating,
      review, // optional
    });

    // save the review in the review collection
    await newReview.save();
    // update the fountain in the fountain collection with the new review
    const fountain = await Fountain.findById(fountainId);
    if (!fountain) {
      // debugging, will remove later
      return res.status(404).json({ message: "Fountain not found." });
    }

    // add the review ID to the fountain's reviews array
    fountain.reviews.push(newReview._id);
    await fountain.save();

    // find the user and update it with the new review ID
    const user = await User.findById(userId);
    if (!user) {
      // debugging, will remove later
      return res.status(404).json({ message: "User not found." });
    }

    // add the review ID to the user's reviews array
    user.reviews.push(newReview._id);
    await user.save();

    // send back a success response
    res.status(200).json({ message: "Review submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, try again." });
  }
});

// start the server
app.listen(3001, () => {
  connectDB();
  console.log("Server is running at http://localhost:3001");
});
