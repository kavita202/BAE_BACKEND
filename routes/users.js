import express from "express";
const router = express.Router();
import { addUser, getAllUsers } from "../models/users.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const data = await getAllUsers();
  res.json({ message: "Here are all the users", payload: data });
});

router.post("/", async function (req, res, next) {
  const { longitude, latitude } = req.body;
  console.log(req.body);
  const data = await addUser(longitude, latitude);
  res.json({ message: "User successfully added", payload: data });
});

export default router;
