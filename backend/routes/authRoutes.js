// import express from "express";
import { Router } from "express";
const router = Router();

import { register, signin, signout } from "../controllers/authController.js";

router.post("/register", register);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;
