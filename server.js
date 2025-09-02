import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/User.js";
import contactRouter from "./Routes/Contact.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());



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
    "mongodb+srv://amantheiit:Jghj5FDtn0Z9onqf@cluster0.bnvueux.mongodb.net/",
    {
      dbName: "ContactApp",
    }
  )
  .then(() => console.log("Connected to ContactApp Database"))
  .catch((err) => console.log("Database connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
