import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAdmins,
  getUserByUsuario,
  getUsers,
  updateUser,
} from "../controllers/users";
const router = Router();

router.get("/", getUsers);
router.get("/admins", getAdmins);
router.get("/:usuario", getUserByUsuario); // Assuming you want to use the same controller for admin users

router.post("/", createUser);

router.patch("/:usuario", updateUser);
router.put("/:usuario", updateUser);

router.delete("/:usuario", deleteUser);

export default router;
