import { Router } from "express";
import { login, loguot, profile, register, verifyToken } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

//router.post("/register", register);
router.post("/register",validateSchema(registerSchema), register);
//router.post("/login", login);
router.post("/login",validateSchema(loginSchema), login);
router.post("/logout", loguot);
router.get("/verify", verifyToken)
router.get("/profile", authRequired, profile);

export default router