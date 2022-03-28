import express from "express";
const router = express.Router();
import { addUser } from "../models/users.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

router.post("/", async function (req, res, next) {
  const { longitude, latitude } = req.body;
  const data = await addUser(longitude, latitude);
  res.json({ message: "User successfully added", payload: data });
});

export default router;
