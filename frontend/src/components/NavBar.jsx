import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#262626" }}
      className="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LibraryBooksOutlinedIcon
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Book Store
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              flexDirection: "row-reverse",
            }}
          >
            <Button
              onClick={() => {
                navigate("/addbook");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Add Book
            </Button>
            <Button
              onClick={() => {
                navigate("/getbook");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              View Books
            </Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
