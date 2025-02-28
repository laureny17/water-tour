import Fountain from "../models/fountain.js";
import Building from "../models/building.js";

export const addFountain = async (req, res) => {
  try {
    const { buildingNumber, floor, description } = req.body;

    const newFountain = new Fountain({
      buildingNumber,
      floor,
      description,
      reviews: [],
    });

    await newFountain.save();

    // update the building
    const fountainBuilding = await Building.findOne({ buildingNumber });
    if (!fountainBuilding) {
      return res.status(404).json({ message: "Building not found" });
    }

    // add to the fountainsByFloor array
    if (!fountainBuilding.fountainsByFloor.has(floor)) {
      fountainBuilding.fountainsByFloor.set(floor, []);
    }
    fountainBuilding.fountainsByFloor.get(floor).push(newFountain._id);

    await fountainBuilding.save();

    res.status(201).json({
      message: "Fountain added successfully",
      fountain: newFountain,
    });
  } catch (error) {
    console.error("Error adding fountain:", error);
    res.status(500).json({ message: "Server error" });
  }
};
