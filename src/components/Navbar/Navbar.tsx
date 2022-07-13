import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../helpers/interfaces";
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from "firebase/auth";
const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => {
  const buttonClickHandler = () => {
    if (loggedIn) {
      signOut(auth).then(() => {
        console.log("Signed out successfully");
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "white",
              }}
            >
              SDA MARKET
            </Typography>
          </Link>
          <Box sx={{ display: "block", mr: "500px" }}>
            <Link
              to="/electronics"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                ELECTRONICS
              </Button>
            </Link>
            <Link to="/jewelery" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                JEWELERY
              </Button>
            </Link>
            <Link to="/mans" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                MEN'S CLOTHING
              </Button>
            </Link>
            <Link to="/womans" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                WOMEN'S CLOTHING
              </Button>
            </Link>
          </Box>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#FC766AFF", mr: "0.1rem" }}
            >
              Cart
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#FC766AFF" }}
              onClick={buttonClickHandler}
            >
              {loggedIn ? "Log out" : "Log in"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
