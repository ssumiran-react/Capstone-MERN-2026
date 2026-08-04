import express from 'express';
import { createUser, getAllUsers, getUserLogin } from '../controllers/userController.js';

const router = express.Router();

router
  .route("/")
  .get(getAllUsers)
  .post(createUser)

router
  .route("/login")  
  .get(getUserLogin)
  
export default router    