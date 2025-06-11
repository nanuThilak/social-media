import authRoutes from "./auth.routes.js"
import userRoutes from "./user.routes.js"
import postRoutes from "./post.routes.js"
import notificationRoutes from "./notification.routes.js"
import express from "express"
const router = express.Router()
router.use("/auth", authRoutes);
router.use("/user", userRoutes)
router.use("/post", postRoutes)
router.use("/notification", notificationRoutes)
export default router;
