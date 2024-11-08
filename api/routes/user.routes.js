import express from "express";
import { user_controller } from "../controllers/user/index.js";
import callbackHandle from "../utils/callbackHandle.js";
import protect from "../middlewares/verifyToken.js";
import uploadFile from "../middlewares/uploadFile.js";

const { list_user, create_user, update_user, remove_user, detail_user } =
  user_controller;
const router = express.Router();

router.get("/", callbackHandle(list_user));
router.post("/", callbackHandle(create_user));
router.put("/:id", uploadFile, callbackHandle(update_user));
router.delete("/:id", callbackHandle(remove_user));
router.get("/:id", callbackHandle(detail_user));

export default router;
