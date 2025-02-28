import mongoose from "mongoose";

const fountainSchema = new mongoose.Schema({
  buildingNumber: {
    type: String, // e.g. could have W51
    required: true,
  },
  floor: {
    type: String, // e.g. could have B for basement, M for mezzanine, etc.
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      default: [],
    },
  ],
});

const Fountain = mongoose.model("Fountain", fountainSchema);

export default Fountain;
