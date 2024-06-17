import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function AddBook() {
  const [open, setOpen] = useState(false);
  const [bookData, setBookData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    year_of_release: "",
    author: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bookData.name,
        description: bookData.description,
        image: bookData.image,
        price: bookData.price,
        year_of_release: bookData.year_of_release,
        author: bookData.author,
        rating: bookData.rating,
      }),
    });
    console.log(response);
    if (response.ok) {
      setOpen(true);
      setBookData({
        name: "",
        description: "",
        image: "",
        price: "",
        year_of_release: "",
        author: "",
        rating: "",
      });
      const json = await response.json();
      if (json.success) {
        console.log("Added a book");
      } else {
        console.log(json);
      }
    } else {
      console.error("Failed to add book:", response.statusText);
    }
  };

  return (
    <section className="addbook">
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="text">Add a Book</h2>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  placeholder="Book Name"
                  required={true}
                  name="name"
                  type="text"
                  id="name"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Description"
                  name="description"
                  required={true}
                  type="text"
                  id="description"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Image Url"
                  name="image"
                  type="text"
                  id="image"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.image}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Price"
                  required={true}
                  name="price"
                  type="number"
                  id="price"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Year of Release"
                  name="year_of_release"
                  required={true}
                  type="text"
                  id="year_of_release"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.year_of_release}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Author"
                  name="author"
                  required={true}
                  type="text"
                  id="author"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.author}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  placeholder="Rating"
                  name="rating"
                  type="number"
                  id="rating"
                  fullWidth
                  sx={{
                    border: "1px solid gray",
                    padding: "8px",
                    marginTop: "8px",
                    color: "white",
                  }}
                  value={bookData.rating}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Add Book
            </Button>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Book Added Successfully!!
        </Alert>
      </Snackbar>
    </section>
  );
}
