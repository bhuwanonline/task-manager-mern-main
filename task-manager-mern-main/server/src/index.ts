import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import tasksRouter from "./routes/task";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
const bodyParser = require("body-parser");
const PORT = 5001;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions)); // allow cross-origin resource sharing
app.use("/api/tasks", tasksRouter);

// connect to a MongoDB database
const MONGODB_URI = "mongodb://localhost:27017/task-manager";
async function connectToMongoDB(connectionString: string) {
  await mongoose.connect(connectionString);
  console.log("MongoDB database successfully connected!");
}

try {
  const MONGODB_URI = "mongodb://localhost:27017/task-manager";
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
} catch (e) {
  console.log("Error occured while connecting to MongoDB: ", e);
}

export const server = app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

export default app;
