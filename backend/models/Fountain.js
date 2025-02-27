import mongoose from "mongoose";
import reviewSchema from "./Review.js";

const fountainSchema = new mongoose.Schema({
  building: {
    // building number
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: [Number],
      required: true,
      default: [],
    },
  ],
});

const Fountain = mongoose.model("Fountain", fountainSchema);

export default Fountain;
