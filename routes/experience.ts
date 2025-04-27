import { Router } from "express";
import { createExperience } from "../controllers/experience";

const router = Router();

router.post("/", createExperience);

export default router;
