import { Router } from "express";
import { addFountain } from "../controllers/fountainController.js";
import { auth } from "../middleware/auth.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = Router();

router.post("/add-fountain", auth, isAdmin, addFountain);

export default router;
