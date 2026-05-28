import express from "express";
import { getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { updateUserProfile } from "../controllers/userController.js";
const userRouter = express.Router();


userRouter.get("/profile", protect, getMe)
userRouter.put("/profile", protect, updateUserProfile)


export default userRouter;

