import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectRoutes from "../routes/projectRoutes";
import searchRoutes from "../routes/searchRoutes";
import taskRoutes from "../routes/taskRoutes";
import teamRoutes from "../routes/teamRoutes";
import userRoutes from "../routes/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
 helmet.crossOriginResourcePolicy({
  policy: "cross-origin",
 })
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//! ROUTE
app.get("/", (req, res) => {
 res.send("This is Home");
});

app.use("/projects", projectRoutes);
app.use("/projects/:id", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);

//! PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
