import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
  volume: { type: Number, required: true },
  image: { type: String, required: true },
  pageCount: { type: Number, required: true },
  publisher: { type: String, required: true },
  category: [{ type: String, required: true }],
  author: { type: String, required: true },
  favorite: { type: Boolean, default: false },
  hasRead: { type: Boolean, default: false },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
