import express from "express";
import {
	getAllCabBookingByUserController,
	completeBookingController
} from "../controllers/cabBookings.controller.js";

import {authenticateUser} from "../middleware/authenticateUser.js";

const router = express.Router();

router.use(authenticateUser);

router.get("/getAllCabBookingsByUser/:driverId", getAllCabBookingByUserController);
router.patch("/completeBooking/:bookingId", completeBookingController);

export default router;