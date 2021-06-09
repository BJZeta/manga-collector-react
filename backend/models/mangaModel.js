import mongoose from "mongoose";

const mangaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
    },
  ],
  pageCount: {
    type: Number,
  },
  haveRead: {
    type: Boolean,
    required: true,
    default: false,
  },
  favorite: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Manga = mongoose.model("Manga", mangaSchema);

export default Manga;
