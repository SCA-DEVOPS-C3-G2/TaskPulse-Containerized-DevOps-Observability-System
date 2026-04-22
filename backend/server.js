import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

console.log("🔥 BACKEND SERVER FROM DOCKER IS RUNNING");

import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import forgotPasswordRouter from "./routes/forgotPassword.js";
import promBundle from "express-prom-bundle";
//app config
dotenv.config();
const app = express();
const metricsMiddleware = promBundle({includeMethod: true, includePath: true});
app.use(metricsMiddleware);
const port = process.env.PORT || 8001;
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(cors());

// health check route (ADD THIS)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running'
  });
});

//db config
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB Connected");
    }
  },
);
console.log(process.env.MONGO_URI);


//api endpoints
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/forgotPassword", forgotPasswordRouter);

// 👇 ADD THIS HERE
app.get('/', (req, res) => {
  res.status(200).send('Backend is running 🚀');
});

//listen
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
