import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
//routes
import driverRoutes from "../api/routes/driver.routes.js";
import kycRoutes from "./routes/verifykyc.routes.js";
import cabRoutes from "./routes/cab.routes.js"
import cabBookingRoutes from "./routes/cabBookings.routes.js"
import paymentRoutes from "./routes/payment.routes.js";

dotenv.config();
const app = express();
const PORT = 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb server");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  // origin: "http://localhost:5173",
  origin: 'https://yesgobusnew.web.app',
  credentials: true
}));

app.use("/api/driver", driverRoutes);
app.use("/api/kyc", kycRoutes);
app.use("/api/cab", cabRoutes);
app.use("/api/cabBooking", cabBookingRoutes);
app.use("/api/payment/", paymentRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`server started on port ${PORT}`);
});
