import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import TaskRouter from "./routes/task-routets.js";

// import { json } from "express/lib/response";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
// app.use(json())
app.use(express.json())

app.use(cors({ origin: "*" }));

app.use(TaskRouter)

export default app;
