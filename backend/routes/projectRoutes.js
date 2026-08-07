import express from 'express';
import { getProjectByUser, createUserProject, deleteUserProject } from '../controllers/projectController.js';

const router = express.Router();

router
  .route("/")
  .post(createUserProject)

router
  .route("/user")
  .get(getProjectByUser)

router
  .route("/delete/:id")
  .get(deleteUserProject)
export default router    