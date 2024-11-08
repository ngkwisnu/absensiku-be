import express from "express";
import { auth_controller } from "../controllers/auth/index.js";
import callbackHandle from "../utils/callbackHandle.js";
import User from "../databases/models/user.model.js";
import { hashPassword } from "../utils/bcrypt.js";

const router = express.Router();
const { login_user, change_password } = auth_controller;

router.post("/login", callbackHandle(login_user));
router.put("/change-password", callbackHandle(change_password));
router.get("/create-admin", async (req, res) => {
  try {
    const user = new User({
      number_id: "admin",
      email: "admin@gmail.com",
      password: await hashPassword("admin"),
    });
    console.log(user);
    await user.save();
    return res.send("success");
  } catch (error) {
    res.send(error);
  }
});

export default router;
