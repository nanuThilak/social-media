import {
  createPost,
  likeDislikePost,
  commentPost,
  deletePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from"../controllers/postControllers.js"
import { protectRoute } from"../middleware/ProtectRoute.js"

import express from "express"
const router = express.Router()

router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts)
router.get("/allPost", protectRoute, getAllPosts);
router.post("/create", protectRoute, createPost);
router.get("/user/:userName", protectRoute, getUserPosts)
router.post("/like/:id", protectRoute, likeDislikePost);
router.post("/comment/:id", protectRoute, commentPost);
router.delete("/delete/:id", protectRoute, deletePost);
export default router;
