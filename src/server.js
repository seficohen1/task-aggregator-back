import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import TaskRouter from "./routes/task-routets.js";


const app = express();

app.use(morgan("dev"));
app.use(helmet());
<<<<<<< HEAD
// app.use(json())
app.use(express.json());

=======
app.use(express.json())
>>>>>>> ac0532c2fca8a7f5ba340e97cb39f530083c4545
app.use(cors({ origin: "*" }));

app.use(TaskRouter);

export default app;
