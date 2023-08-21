import Cab from "../modals/cab.modal.js"
import CabBooking from "../modals/cabbooking.modal.js";

export const getAllCabBookingByUser = async (driverId) => {
  try {
    const cabsWithBookingDetails = await Cab.aggregate([
      {
        $match: { driverId: driverId },
      },
      {
        $lookup: {
          from: "cabbookings",
          localField: "_id",
          foreignField: "cabId",
          as: "bookings",
        },
      },
      {
        $unwind: "$bookings"
      }
    ]);

    if (cabsWithBookingDetails.length === 0) {
      return {
        status: 404,
        message: "No cabs found for the driver.",
        data: [],
      };
    }

    return {
      status: 200,
      message: "Cabs and Booking Details retrieved successfully",
      data: cabsWithBookingDetails,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: "An error occurred while fetching cab bookings.",
      data: [],
    };
  }
};

export const completeBooking = async (bookingId) => {
  try {
    const booking = await CabBooking.findByIdAndUpdate(bookingId, {
      status: "completed",
    });
    if (!booking) {
      return {
        status: 404,
        message: "Booking not found",
      };
    }
    // booking.status = "completed";
    // await booking.save();
    const cabId = booking.cabId;
    await Cab.findByIdAndUpdate(cabId, { cab_status: "available" });
    return {
      status: 200,
      message: "Booking completed successfully",
      data: booking,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: "An error occurred while completing the booking.",
      data: [],
    };
  }
};