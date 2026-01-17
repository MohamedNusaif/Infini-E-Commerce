import express from "express";

import register from "../controllers/auth/register.controller.js";
import login from "../controllers/auth/login.controller.js";
import refresh from "../controllers/auth/refresh.controller.js";
import logout from "../controllers/auth/logout.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

export default router;
