import express from "express";
import {
  addCabDetails,
  updateCabDetails,
  getCabDetailsByUser
} from "../controllers/cab.controller.js";
import {authenticateUser} from "../middleware/authenticateUser.js";

const router = express.Router();

router.use(authenticateUser);

router.post("/createCab", addCabDetails);
router.patch("/updateCab/:id", updateCabDetails);
router.get("/getCabDetailsByUser/:driverId", getCabDetailsByUser);

export default router;