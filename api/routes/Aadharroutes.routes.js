import express from "express";
import { authenticate } from "../controllers/aadharAuth.controller.js";

const routes = express.Router();

routes.post("/authenticate", authenticate);

export default routes;
