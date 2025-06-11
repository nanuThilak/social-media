import {
  signupController,
  loginController,
  logoutController,
  getUser,
} from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/ProtectRoute.js";
import express from "express";
const router = express.Router();

router.get("/getUser", protectRoute, getUser);
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
