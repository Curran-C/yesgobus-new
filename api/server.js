import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
