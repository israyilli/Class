import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="about">About</Link>
            </Button>
            <Button color="inherit">
              <Link to="contact">Contact</Link>
            </Button>
            <Button color="inherit">
              <Link to="categories">Categories</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
