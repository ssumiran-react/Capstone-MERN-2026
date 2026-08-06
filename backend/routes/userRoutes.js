import express from 'express';
import { createUser, getAllUserDev, getUserLogin } from '../controllers/userController.js';

const router = express.Router();

router
  .route("/")
  .get(getAllUserDev)
  .post(createUser)

router
  .route("/login")  
  .get(getUserLogin)
  
export default router    