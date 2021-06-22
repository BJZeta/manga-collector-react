import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";

//POST REQ // ADD BOOK // PRIVATE
const addBook = asyncHandler(async (req, res) => {
  const { name, volume, image, pageCount, publisher, author, category } = req.body;

  const book = new Book({
    user: req.user._id,
    name,
    volume,
    image,
    pageCount,
    publisher,
    author,
    category
  });

  const addedBook = await book.save();
  res.status(201).json(addedBook);
});

//GET REQ // LOOK UP BOOK COLLECTION // PRIVATE
const getCollection = asyncHandler(async (req, res) => {
  const collection = await Manga.find({ user: req.params.userId });

  if (collection) {
    res.json(collection);
  } else {
    res.status(404);
    throw new Error("Collection Can't Be Found/Does Not Exist");
  }
});

//DELETE REQ // REMOVE BOOK // PRIVATE
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.remove();
    res.json({ message: "Book Has Been Removed" });
  } else {
    res.status(404);
    throw new Error("Book Cannot Found");
  }
});

//PUT REQ // UPDATE BOOK // PRIVATE
const updateBook = asyncHandler(async (req, res) => {
  const { favorite, hasRead } = req.body;

  const book = await Book.findById(req.params.id);

  if (book) {
    book.favorite = favorite;
    book.hasRead = hasRead;

    const updatedBook = await book.save();

    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error("Book Not Found");
  }
});

export { addBook, getCollection, deleteBook, updateBook };
