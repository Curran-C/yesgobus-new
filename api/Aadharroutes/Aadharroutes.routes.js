import express from "express";
import { authenticate } from "../AadharAuth/aadharAuth.controller.js";

const routes = express.Router();

routes.post("/authenticate", authenticate);

export default routes;
