import { Router } from "express";
import {
 createProject,
 getProjects,
 getProject,
} from "../controllers/projectController";

const router = Router();

router.get("/:id", getProject); // Route to get a specific project
router.get("/projects", getProjects); // Route to get all projects
router.post("/", createProject);

export default router;
