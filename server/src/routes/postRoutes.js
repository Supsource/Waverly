import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createPost } from "../controllers/postController.js";
const postRouter = express.Router();

postRouter.post("/", protect, createPost);


export default postRouter;