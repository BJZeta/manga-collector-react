import asyncHandler from "express-async-handler";
import Manga from "../models/mangaModel.js";

//POST REQ // ADD MANGA // PRIVATE
const addManga = asyncHandler(async (req, res) => {
  const { name, volume, image, pageCount, publisher, author } = req.body;

  const manga = new Manga({
    user: req.user._id,
    name,
    volume,
    image,
    pageCount,
    publisher,
    author,
  });

  const addedManga = await manga.save();
  res.status(201).json(addedManga);
});

//GET REQ // LOOK UP MANGA COLLECTION // PRIVATE
const getCollection = asyncHandler(async (req, res) => {
  const collection = await Manga.find({ user: req.params.userId });

  if (collection) {
    res.json(collection);
  } else {
    res.status(404);
    throw new Error("Collection Can't Be Found/Does Not Exist");
  }
});

//DELETE REQ // REMOVE MANGA // PRIVATE
const deleteManga = asyncHandler(async (req, res) => {
  const manga = await Manga.findById(req.params.id);

  if (manga) {
    await manga.remove();
    res.json({ message: "Manga Has Been Removed" });
  } else {
    res.status(404);
    throw new Error("Manga Not Found");
  }
});

//PUT REQ // UPDATE MANGA // PRIVATE
const updateManga = asyncHandler(async (req, res) => {
  const { favorite, hasRead } = req.body;

  const manga = await Manga.findById(req.params.id);

  if (manga) {
    manga.favorite = favorite;
    manga.hasRead = hasRead;

    const updatedManga = await manga.save();

    res.json(updatedManga);
  } else {
    res.status(404);
    throw new Error("Manga Not Found");
  }
});

export { addManga, getCollection, deleteManga, updateManga };
