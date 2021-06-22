import express from "express";
import {
  addBook,
  deleteBook,
  getCollection,
  updateBook,
} from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addBook);
router.route("/:userId").get(protect, getCollection);
router.route("/:id").put(protect, updateBook).delete(protect, deleteBook);

export default router;