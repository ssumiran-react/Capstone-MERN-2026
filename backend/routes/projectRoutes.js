import express from 'express';
import { getProjectByUser, createUserProject } from '../controllers/projectController.js';

const router = express.Router();

router
  .route("/")
  .get(getProjectByUser)
  .post(createUserProject)

export default router    