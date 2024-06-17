import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "black",
  color: "white",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
};

export default function BookCard({ book }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const { fetchBooks } = useContext(AppContext);

  const [editBookData, setEditBookData] = useState({
    name: book.name,
    description: book.description,
    image: book.image,
    price: book.price,
    year_of_release: book.year_of_release,
    author: book.author,
    rating: book.rating,
  });

  const navigate = useNavigate();
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8000/api/v1/deletebook/${book._id}`)
      .then((res) => console.log("Book Deleted", res.data))
      .catch((error) => console.error(error));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/updatebook/${book._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...editBookData,
          }),
        }
      );
      //console.log(response);
      setEditBookData("");
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card
        sx={{
          width: 345,
          height: 500,
          marginTop: "50px",
          backgroundColor: "#121211",
          border: "1px solid #9e9e9d",
          cursor: "pointer",
        }}
      >
        <CardHeader
          title={book.name}
          subheader={book.year_of_release}
          sx={{ color: "white" }}
          subheaderTypographyProps={{ style: { color: "white" } }}
          onClick={() => navigate(`/getbook/${book._id}`)}
        />
        <CardMedia
          component="img"
          height="194"
          image={book.image}
          alt="Paella dish"
          onClick={() => navigate(`/getbook/${book._id}`)}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "white", fontSize: "18px" }}>
            Rs.{book.price}
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "16px" }}>
            by {book.author}
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "16px" }}>
            Rating: {book.rating}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "white" }} onClick={handleDelete} />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon sx={{ color: "white" }} onClick={() => setOpen(true)} />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Edit
          </Typography>
          <Typography>Book Name</Typography>
          <Input
            placeholder="Name"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 2,
            }}
            value={editBookData.name}
            onChange={(e) =>
              setEditBookData({ ...editBookData, name: e.target.value })
            }
          />
          <Input
            placeholder="Description"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.description}
            onChange={(e) =>
              setEditBookData({ ...editBookData, description: e.target.value })
            }
          />
          <Input
            placeholder="Image"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.image}
            onChange={(e) =>
              setEditBookData({ ...editBookData, image: e.target.value })
            }
          />
          <Input
            placeholder="Price"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.price}
            onChange={(e) =>
              setEditBookData({ ...editBookData, price: e.target.value })
            }
          />
          <Input
            placeholder="Year of Release"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.year_of_release}
            onChange={(e) =>
              setEditBookData({
                ...editBookData,
                year_of_release: e.target.value,
              })
            }
          />
          <Input
            placeholder="Author"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.author}
            onChange={(e) =>
              setEditBookData({ ...editBookData, author: e.target.value })
            }
          />
          <Input
            placeholder="Rating"
            sx={{
              color: "white",
              borderBottom: "#6875F5",
              width: "100%",
              mt: 3,
            }}
            value={editBookData.rating}
            onChange={(e) =>
              setEditBookData({ ...editBookData, rating: e.target.value })
            }
          />
          <Button sx={{ color: "#6875F5", mt: 4 }} onClick={handleUpdate}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
