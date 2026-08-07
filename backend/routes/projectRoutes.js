import express from 'express';
import { getProjectByUser, createUserProject, 
  updatUserProject, deleteUserProject } from '../controllers/projectController.js';

const router = express.Router();

router
  .route("/")
  .post(createUserProject)

router
  .route("/user")
  .get(getProjectByUser)

router
  .route("/user/:id")
  .put(updatUserProject)  

router
  .route("/delete/:id")
  .delete(deleteUserProject)

  export default router    