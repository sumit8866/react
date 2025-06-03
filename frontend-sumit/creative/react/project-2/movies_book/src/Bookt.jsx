
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
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";

import React, { useState } from "react";
import logo from "./logo.png";
import banner from "./banner1.jpg";
import logo2 from "./clapperboard.gif";
import Movie_1 from "./Movie_1.jpg";
import Movie_2 from "./Movie_2.jpg";
import Movie_3 from "./Movie_3.jpg";
import Movie_4 from "./banner-1.jpg";
import photo_1 from "./photo-1.jpg";
import photo_2 from "./photo-2.jpg";
import gallery_bg from "./gallery_bg.png";
import gallery_1 from "./gallery_1.jpg";
import gallery_2 from "./gallery_2.jpg";
import gallery_3 from "./gallery_3.jpg";
import gallery_4 from "./gallery_4.jpg";
import gallery_5 from "./gallery_5.jpg";
import offer_bg from "./offer_bg.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Margin, Transform } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Header1 from "./Header1";

const Bookt = () => {

    // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    //   const toggleMobileMenu = () => {
    //     setMobileMenuOpen(!isMobileMenuOpen);
    //   };

      
const dates = Array.from({ length: 12 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    day: d.toLocaleString("default", { weekday: "short" }),
    date: d.getDate(),
    month: ("0" + (d.getMonth() + 1)).slice(-2),
  };
});

const cities = [
  {
    name: "San Francisco",
    times: ["7:30 am"],
  },
  {
    name: "Los Angeles",
    times: ["8:30 am", "2:30 pm"],
  },
  {
    name: "San Jose",
    times: ["10:30 am", "11:30 am"],
  },
];
 const [selectedRegion, setSelectedRegion] = useState("California");
  const [selectedFormat, setSelectedFormat] = useState("3D");
  const [selectedDate, setSelectedDate] = useState(0);
  return (
    <>
{/* <Box bgcolor={'black'}>
    <Box className="header-container" >
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
                {["Home", "Pages", "Menu", "Blog", "About Us", "Contact"].map(
                  (item, idx) => (
                    <li key={idx} className="nav-item">
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
                <li className="nav-item">
                  <a href="#" onClick={() => setMobileMenuOpen(false)}>
                    <SearchSharpIcon sx={{ color: "yellow" }} />
                  </a>
                </li>
              </ul>
            </nav>
          </Box>
          </Box> */}
          <Header1></Header1>

          <Box sx={{ bgcolor: "#fdfbef", minHeight: "100vh", p: 2, width:{xs:'100%',md:'80%'} ,margin:'auto'}}>
      {/* Date Tabs */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          mb: 2,
          pb: 1,
        }}
      >
        {dates.map((item, index) => (
          <Button
            key={index}
            onClick={() => setSelectedDate(index)}
            variant={selectedDate === index ? "contained" : "outlined"}
            sx={{
              minWidth: "70px",
              flexShrink: 0,
              flexDirection: "column",
              bgcolor: selectedDate === index ? "#000" : "#fff",
              color: selectedDate === index ? "#fff" : "#000",
              borderColor: "#ccc",
            }}
          >
            <Typography fontSize="0.8rem">{item.date}</Typography>
            <Typography fontSize="0.7rem">{item.day}</Typography>
            <Typography fontSize="0.6rem">{item.month}</Typography>
          </Button>
        ))}
      </Box>

      {/* Region Toggle */}
      <ToggleButtonGroup
        value={selectedRegion}
        exclusive
        onChange={(e, value) => value && setSelectedRegion(value)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="California">California</ToggleButton>
        <ToggleButton value="New York">New York</ToggleButton>
      </ToggleButtonGroup>

      {/* Format Toggle */}
      <ToggleButtonGroup
        value={selectedFormat}
        exclusive
        onChange={(e, value) => value && setSelectedFormat(value)}
        sx={{ mb: 3, ml: 2 }}
      >
        <ToggleButton value="3D">3D</ToggleButton>
        <ToggleButton value="2D">2D</ToggleButton>
      </ToggleButtonGroup>

      {/* City Showtimes */}
      {cities.map((city, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" mb={1}>
            {city.name}
          </Typography>
          <Typography variant="caption" sx={{ mb: 1, display: "block" }}>
            IMAX
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {city.times.map((time, i) => (
              <Button
                key={i}
                variant="outlined"
                size="small"
                sx={{
                  color: "#000",
                  borderColor: "#ccc",
                  backgroundColor: "#fff",
                  textTransform: "none",
                }}
              >
                {time}
              </Button>
            ))}
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </Box>
    </>
  )
}

export default Bookt