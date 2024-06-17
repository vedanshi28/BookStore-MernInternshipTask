const express = require("express");
const app = express();
require("./db/connection.js");
const bookRoute = require("./routes/book.routes.js");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use("/api/v1", bookRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
