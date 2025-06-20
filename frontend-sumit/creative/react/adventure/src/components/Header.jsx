import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../image/logo.png";

const navItems = ["Home", "About", "Tour", "Hotels", "Contact", "Add Listing"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
    
      <Box sx={{  height: "80px" }}>
        <Box
          width={{xs:'100%', md:'80%'}}
          mx="auto"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
         
          <Box>
            <img src={Logo} alt="Logo" style={{paddingLeft:'10px'}}/>
          </Box>

          
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "30px",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                  className="nav-link"
                    href={`${item.toLowerCase().replace(/\s/g, "")}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "16px",
                     
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Box>

         
          <IconButton
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "#111", color: "white", width: 250 },
        }}
      >
        <Box p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ul style={{ listStyle: "none", padding: "20px 0", margin: 0 }}>
            {navItems.map((item) => (
              <li key={item} style={{ marginBottom: "15px" }}>
                <a
                  href={`${item.toLowerCase().replace(/\s/g, "")}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    display: "block",
                    padding: "5px 0",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
