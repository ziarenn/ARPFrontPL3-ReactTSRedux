import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontWeight: 500 },
            }}
          >
            SDA MARKET
          </Typography>
          <Box sx={{ display: "block", mr: "500px" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              ELECTRONICS
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              JEWELERY
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              MEN'S CLOTHING
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              WOMEN'S CLOTHING
            </Button>
          </Box>
          <Button variant="contained" sx={{ bgcolor: "#FC766AFF" }}>
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
