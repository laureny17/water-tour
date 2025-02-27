import mongoose from "mongoose";

const buildingSchema = new mongoose.Schema({
  buildingNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  buildingName: {
    type: String,
    required: false, // I'm pretty sure some buildings don't have names
  },
  neighbors: {
    type: [Number], // list of neighboring building numbers
    default: [],
  },
  fountains: {
    type: [Number], // array of fountain IDs of fountains in the building
    default: [],
  },
});

const Building = mongoose.model("Building", buildingSchema);

export default Building;
