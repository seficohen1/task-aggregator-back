import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import TaskRouter from "./routes/task-routets.js";
import UserRouter from "./routes/user-routes.js";
import AuthRouter from "./routes/auth-routes.js";
import UserModel from "./models/user-model.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
// app.use(json())
app.use(express.json());

app.use(cors({ origin: "*" }));

app.use(AuthRouter);
app.use(TaskRouter);
app.use(UserRouter);
app.use(UserModel);

export default app;
