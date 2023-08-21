import mongoose from "mongoose";
import {
	getAllCabBookingByUser,
	completeBooking
} from "../service/cabBookings.service.js";

export const getAllCabBookingByUserController = async (req, res) => {
	try {
		const driverId = new mongoose.Types.ObjectId(req.params.driverId);
		const result = await getAllCabBookingByUser(driverId);
		res.status(result.status).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "An error occurred while processing your request.",
		});
	}
}

export const completeBookingController = async (req, res) => {
  try {
    const {bookingId} = req.params;
    const result = await completeBooking(bookingId);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while processing your request.",
    });
  }
};