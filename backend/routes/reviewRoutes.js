// import express from "express";
import { Router } from "express";
import { addReview, deleteReview } from "../controllers/reviewController.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// Define routes
router.post("/add-review", auth, addReview);
router.delete("/delete-review/:reviewId", auth, deleteReview);

export default router;
