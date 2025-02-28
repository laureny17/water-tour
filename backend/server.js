import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import fountainRoutes from "./routes/fountainRoutes.js";

dotenv.config(); // get access to .env variables

const app = express();

app.use(express.json()); // middleware allowing us to parse json bodies in the request body

// routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/fountains", fountainRoutes);

// basic route to check if server is running
app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// start the server
app.listen(3001, () => {
  connectDB();
  console.log("Server is running at http://localhost:3001");
});
