import express from "express";
import {
  addManga,
  deleteManga,
  getCollection,
  updateManga,
} from "../controllers/mangaController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addManga);
router.route("/:userId").get(protect, getCollection);
router.route("/:id").put(protect, updateManga).delete(protect, deleteManga);

export default router;
// 60cab0896af0042418dc9ad0
// 60cab0896af0042418dc9ad0
