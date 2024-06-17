const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://vedanshimishra844:G8fRQW7Ji6Ci5ZrL@cluster0.uxifrky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected");
  });
