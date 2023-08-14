import express from "express";
import {
    authenticate,
    aadhaarKycGenerateOtp,
    aadhaarKycVerifyOtp,
    panVerification,
    bankAccountVerification
} from "../controllers/verifykyc.controller.js";

const routes = express.Router();

routes.get("/authenticate", authenticate);
routes.post("/aadhaar/generateOtp", aadhaarKycGenerateOtp);
routes.post("/aadhaar/verifyOtp", aadhaarKycVerifyOtp);
routes.post("/pan/verify", panVerification);
routes.post("/bank/verify", bankAccountVerification);

export default routes;
