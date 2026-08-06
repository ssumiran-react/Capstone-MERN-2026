import express from 'express';
import { getProjectByUser, createUserProject } from '../controllers/projectController.js';

const router = express.Router();

router
  .route("/")
  .post(createUserProject)

router
  .route("/:userId")
  .get(getProjectByUser)

export default router    