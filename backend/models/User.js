import mongoose from "mongoose";
import reviewSchema from "./Review.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, // store the URL of the profile picture
    required: true,
    default: "https://placeholder.com/default-pfp.png", // put a placeholder later
  },
  reviews: {
    type: [Number],
    required: true,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
