const router = require("express").Router();
const Book = require("../models/books.models.js");

//Add a Book
router.post("/addbook", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Book(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book added successfully" });
    });
    //console.log(newBook);
  } catch (e) {
    console.log(e);
  }
});

//Fetch books
router.get("/getbook", async (req, res) => {
  let books;
  try {
    books = await Book.find();
    res.status(200).json({ books });
  } catch (e) {
    console.log(e);
  }
});

//Explore a particular book
router.get("/getbook/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await Book.findById(id);
    res.status(200).json({ book });
  } catch (e) {
    console.log(e);
  }
});

//Update book
router.put("/updatebook/:id", async (req, res) => {
  let updatedbook;
  const id = req.params.id;
  const { name, description, image, price, year_of_release, author, rating } =
    req.body;
  try {
    updatedbook = await Book.findByIdAndUpdate(id, {
      name,
      description,
      image,
      price,
      year_of_release,
      author,
      rating,
    });
    await updatedbook.save().then(() => {
      res.status(200).json({ message: "Updated Successfully" });
    });
  } catch (e) {
    console.log(e);
  }
});

//Delete a book
router.delete("/deletebook/:id", async (req, res) => {
  let deletedbook;
  const id = req.params.id;
  try {
    deletedbook = await Book.findByIdAndDelete(id).then(() => {
      res.status(200).json({ message: "Deleted Book Successfully" });
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
