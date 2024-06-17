const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    year_of_release: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
