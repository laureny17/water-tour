import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection URI
const uri = process.env.MONGO_URI;

// read the JSON
const buildings = JSON.parse(fs.readFileSync("buildings.json", "utf-8"));

async function insertBuildings() {
  try {
    // xonnect to MongoDB
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // get the buildings collection
    const Building = mongoose.model(
      "Building",
      new mongoose.Schema({}, { strict: false })
    );

    // clear existing buildings
    await Building.deleteMany({});
    console.log("Cleared existing buildings");

    // let MongoDB generate the _id for each document
    await Building.insertMany(buildings, { lean: true });
    console.log(`Successfully inserted ${buildings.length} buildings`);

    // disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

insertBuildings();
