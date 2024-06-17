import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

function Book() {
  const [book, setBook] = useState();
  const location = useLocation();
  let id = location.pathname.split("/").at(-1);

  //Fetch individual book by its id
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:8000/api/v1/getbook/${id}`)
        .then((res) => {
          {
            setBook(res.data.book);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetch();
  }, []);

  return (
    <section className="book">
      <Container maxWidth="xs" className="container">
        <Grid container spacing={10} className="maingrid">
          {!book ? (
            <div className="loader">
              <TailSpin type="Bars" color="white" height={60} width={60} />
            </div>
          ) : (
            <>
              <Grid item xs={6} className="grid1">
                <Box>
                  <Image
                    src={book.image}
                    alt={book.name}
                    className="bookimage"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} className="grid2">
                <Box sx={{ marginBottom: "25px" }}>
                  <h1 className="name">{book.name}</h1>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <h3 className="desc">{book.description}</h3>
                </Box>
                <Box sx={{ marginBottom: "15px" }}>
                  <h3>by {book.author}</h3>
                </Box>
                <Box>
                  <h3>{book.year_of_release}</h3>
                </Box>
                <Box>
                  <h3>Rs.{book.price}</h3>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
}

export default Book;
