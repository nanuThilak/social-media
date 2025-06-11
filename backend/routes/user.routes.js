import {
  getUserProfileController,
  getSuggestedProfileController,
  followUnfollowUserController,
  updateUserProfileController,
} from "../controllers/userControllers.js";
import { protectRoute } from "../middleware/ProtectRoute.js";
import express from "express";

const router = express.Router();
router.get("/profile/:userName", protectRoute, getUserProfileController);
router.get("/suggested", protectRoute, getSuggestedProfileController);
router.post("/follow/:id", protectRoute, followUnfollowUserController);
router.put("/update", protectRoute, updateUserProfileController);

export default router;

