import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aadhayKYCroutes from "../api/Aadharroutes/Aadharroutes.routes.js";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//routes
app.use("/api/aadharkyc", aadhayKYCroutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
