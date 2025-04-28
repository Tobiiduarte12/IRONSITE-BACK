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
router.get("/:username", getUserByUsuario); // Assuming you want to use the same controller for admin users

router.post("/", createUser);

router.patch("/:username", updateUser);
router.put("/:username", updateUser);

router.delete("/:username", deleteUser);

export default router;
