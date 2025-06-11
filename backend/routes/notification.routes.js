import {
  getNotificationController,
  deleteAllNotificationController,
  deleteNotificationController
} from"../controllers/notificationControllers.js"
import { protectRoute } from"../middleware/ProtectRoute.js"
import express from "express"

const router = express.Router()



router.get("/", protectRoute, getNotificationController);
router.delete("/", protectRoute, deleteAllNotificationController);
router.delete("/:id", protectRoute, deleteNotificationController);

export default router;
