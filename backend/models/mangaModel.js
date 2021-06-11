import mongoose from "mongoose";

const mangaSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  collection: [
    {
      name: { type: String, required: true },
      volume: { type: Number, required: true },
      image: { type: String, required: true },
      pageCount: { type: Number, required: true },
      publisher: { type: String, required: true },
      author: { type: String, required: true },
      favorite: { type: Boolean, default: false },
      hasRead: { type: Boolean, default: false },
    },
  ],
});

const Manga = mongoose.model("Manga", mangaSchema);

export default Manga;
