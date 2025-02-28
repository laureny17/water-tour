import mongoose from "mongoose";

const buildingSchema = new mongoose.Schema({
  buildingNumber: {
    type: String,
    required: true,
    unique: true,
  },
  buildingName: {
    type: String,
    required: false, // I'm pretty sure some buildings don't have names
  },
  neighbors: {
    // type: [mongoose.Schema.Types.ObjectId], // list of neighboring building IDs
    // ref: "Building",
    type: [String], // list of neighboring building numbers
    default: [],
    required: false,
  },
  fountainsByFloor: {
    type: Map,
    of: [mongoose.Schema.Types.ObjectId], // array of fountain IDs of fountains on a specific floor
    ref: "Fountain",
    default: new Map(),
    required: false,
  },
});

const Building = mongoose.model("Building", buildingSchema);

export default Building;
