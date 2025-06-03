import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Paper,
  Link,
  DialogActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import logo from "./logo.png";
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import App from "./App";

const Header1 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignup = () => {
    setOpenLogin(false); // close login if open
    setOpenSignup(true); // open sign up
  };
  const handleCloseSignup = () => setOpenSignup(false);

  return (
    <>
      <Box className="header-container">
        <Box className="logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </Box>

        <Box className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Box>

        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {[
              { name: "home", id: "Home" },
              { name: "Pages", id: "Pages" },
              { name: "Menu", id: "Menu" },
              { name: "Blog", id: "Blog" },
              { name: "About Us", id: "AboutUs" },
              { name: "Contact", id: "Contact" },
            ].map((item, idx) => (
              <li key={idx} className="nav-item">
                {/* <App> */}
               
                <Link href={item.id} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
                
                {/* </App> */}
                
              </li>
            ))}

            <li className="nav-item">
              <>
                <Button
                  variant="contained"
                  onClick={handleOpenLogin}
                  sx={{
                    width: "100%",
                    backgroundColor: "#f57c00",
                    color: "#fff",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#f57c00",
                    },
                  }}
                >
                  LOG IN
                </Button>

                <Dialog
                  open={openLogin}
                  onClose={handleCloseLogin}
                  maxWidth="md"
                  fullWidth
                >
                  <DialogTitle sx={{ bgcolor: "#121212", color: "#fff" }}>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                          width: { xs: "40%", sm: "20%" },
                          // maxHeight: 80,
                          mb: 3,
                        }}
                      />
                    </Box>
                  </DialogTitle>
                  <DialogContent sx={{ bgcolor: "#121212", color: "#fff" }}>
                    <Typography
                      variant="body2"
                      mb={3}
                      color="#aaa"
                      align="center"
                    >
                      Welcome back! Log in to book your favorite shows:
                    </Typography>
                    <TextField
                      label="Email"
                      type="email"
                      variant="standard"
                      fullWidth
                      sx={{ mb: 3 }}
                      InputLabelProps={{ style: { color: "#aaa" } }}
                      InputProps={{ style: { color: "#fff" } }}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="standard"
                      fullWidth
                      sx={{ mb: 3 }}
                      InputLabelProps={{ style: { color: "#aaa" } }}
                      InputProps={{ style: { color: "#fff" } }}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#f57c00",
                        color: "#fff",
                        borderRadius: "0px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#f57c00",
                        },
                        mt: 2,
                      }}
                    >
                      LOG IN
                    </Button>
                    <Typography
                      variant="body2"
                      mt={2}
                      align="center"
                      color="#777"
                    >
                      <a
                        onClick={handleOpenSignup}
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                          color: "yellow",
                          "&:hover": { color: "orange" },
                          fontSize: "15px",
                        }}
                      >
                        CREATE AN NEW ACCOUNT
                      </a>
                    </Typography>
                  </DialogContent>
                </Dialog>
              </>
            </li>
          </ul>
        </nav>
      </Box>

      <Dialog
        open={openSignup}
        onClose={handleCloseSignup}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ bgcolor: "#121212", color: "#fff" }}>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: "40%", sm: "20%" },
                // maxHeight: 80,
                mb: 3,
              }}
            />
          </Box>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#121212", color: "#fff" }}>
          <TextField
            label="Full Name"
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
          <TextField
            label="Email"
            type="email"
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            sx={{ mb: 4 }}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#f57c00",
              color: "#fff",
              borderRadius: "0px",
              "&:hover": { backgroundColor: "#fff", color: "#f57c00" },
            }}
          >
            SIGN UP
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header1;
