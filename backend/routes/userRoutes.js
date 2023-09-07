import express from 'express';
import { getUser,loginUser } from '../controllers/userController.js';


const router = express.Router();

// get user details
router.get("/",getUser);

// user login
router.post("/login",loginUser);

// export user routes
export default router;