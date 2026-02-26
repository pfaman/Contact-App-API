import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/User.js";
import contactRouter from "./Routes/Contact.js";
import { config } from "dotenv";

const app = express();

app.use(bodyParser.json());

// .env setup
config({path : './.env'});

// User Routes
app.use("/api/user", userRouter);

// Contact Routes
app.use("/api/contact", contactRouter);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Contact App" });
});

mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      dbName: "ContactApp",
    }
  )
  .then(() => console.log("Connected to ContactApp Database"))
  .catch((err) => console.log("Database connection error:", err));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
