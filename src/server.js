import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import TaskRouter from "./routes/task-routes.js";
import UserRouter from "./routes/user-routes.js";


const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json())
app.use(cors({ origin: "*" }));

app.use(TaskRouter);
app.use(UserRouter);

export default app;
