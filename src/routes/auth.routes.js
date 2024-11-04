import { Router } from "express";
import {
  authLoginCon,
  authRegisterCon,
  authGetRegisterCon,
  authGetLoginCon,
  authGetMeCon,
} from "../controllers/index.js";

export const authRoutes = new Router();

authRoutes.post("/register", authRegisterCon);
authRoutes.get("/register", authGetRegisterCon);
authRoutes.post("/login", authLoginCon);
authRoutes.get("/login", authGetLoginCon);
authRoutes.get("/me", authGetMeCon)