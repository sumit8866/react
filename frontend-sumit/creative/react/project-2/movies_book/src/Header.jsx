import { Box, Typography, Button, Container ,Stack} from "@mui/material";
import React, { useState } from "react";
import logo from "./logo.png";
import banner from "./banner1.jpg";
import logo2 from "./clapperboard.gif";
import Movie_1 from "./Movie_1.jpg";
import Movie_2 from "./Movie_2.jpg";
import Movie_3 from "./Movie_3.jpg";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Transform } from "@mui/icons-material";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const movies = [
    {
      title: "The Scariest Dream",
      genres: ["Thriller"],
      duration: "190 Mins",
      image: Movie_1,
    },
    {
      title: "The Pursuit of Dreams",
      genres: ["Animation"],
      duration: "133 Mins",
      image: Movie_2,
    },
    {
      title: "Alis Keep Walking",
      genres: ["Crime ,", "Thriller"],
      duration: "150 Mins",
      image: Movie_3,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
        }}
        id="home"
      >
        <img
          src={banner}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2 }}>
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

          <Box sx={{ py: { xs: 22, sm: 22, md: 22 }, height: "100%" }}>
            <Container maxWidth="lg">
              <Box
                direction={{ xs: "column-reverse", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
              >
                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    sx={{ color: "#f57c00", fontFamily: "cursive" }}
                  >
                    Adventure Movie
                  </Typography>
                  <Typography variant="h2" fontWeight="bold"
                  
                  sx={{
                    transition:'all 0.6s ease',
                     "&:hover": {
                        color: "#f57c00",
                        transition:'all 0.6s ease'
                      },
                  }}>
                    LOVE NIGHTMARE
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontSize: { xs: "14px" } }}
                  >
                    Written and Directed by Aleesha Rose / Ireland 2023
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 4,
                      backgroundColor: "#f57c00",
                      transition:'all 0.6s ease',
                      "&:hover": { backgroundColor: 'white',
                        color:'#f57c00',
                        transition:'all 0.6s ease'
                       },
                    }}
                  >
                    Get Ticket
                  </Button>
                </Box>

                <Box textAlign={{ xs: "left", md: "right" }}>
                  <Typography variant="body1">Coming in</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      borderBottom: "3px solid #f57c00",
                      display: "inline-block",
                    }}
                  >
                    March 2023
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Box
        className="Top_Movies_section"
        sx={{ width: "100%", mt: { xs: "60px", md: "100px" } }}
      >
        <Box className="heading" >
          <Box className="context_1">
            <img  src={logo2} alt="" height={"36px"} width={"36px"} />
            <Typography variant="p" color="gray" fontWeight={600} marginTop={1}>
              Checkout top movies
            </Typography>
            <Typography variant="h3" fontFamily="Space Grotesk">
              Top Movies In Theater
            </Typography>
          </Box>
          <Box className="context_2">
            <Typography variant="p" color="gray" fontWeight={600}>
              Phasellus non cursus ligula, sed mattis urna. Aenean ac tor
              gravida, volutpat quam eget, consequat elit.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          width:'90%',
          margin:'auto',
          justifyContent: { xs: "center", md: "space-between" },
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        {movies.map((movie, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px", // flex-grow, flex-shrink, flex-basis
              maxWidth: 360,
              minWidth: 280,
              boxShadow: 3,
              borderRadius: " 10px 10px 0px 0",
            }}
          >
            <Box />
            <img
              src={movie.image}
              alt={movie.title}
              width={"100%"}
              className="Movie_img"
            />
            <Box>
              <Box
                sx={{
                  maxWidth: 280,
                  margin:'auto',
                  padding: 3,
                  // border: "1px solid #eee",
                  // borderRadius: 2,
                  // boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  backgroundColor: "#fff",
                  fontFamily: "Arial, sans-serif",
                  transform: 'translateY(-30px)',
                  transition:'all 0.6s ease',
                  "&:hover":{
                    transform: 'translateY(-15px)',
                    transition:'all 0.6s ease'
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  {movie.title}
                </Typography>

                <Box
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ color: "#666", fontSize: "0.9rem", marginBottom: 2 }}
                >
                  <Box direction="row" spacing={0.5} alignItems="center">
                    {/* Tag Icon */}
                    <Box
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      sx={{ width: 16, height: 16, color: "#e67e22" }}
                    >
                      <path d="M20.59 13.41l-8.49 8.49c-.39.39-1.02.39-1.41 0L2 13.41V2h11.41l7.18 7.18c.39.39.39 1.02 0 1.41zM6.5 6A1.5 1.5 0 1 0 6.5 9 1.5 1.5 0 0 0 6.5 6z" />
                    </Box>
                    <span>{movie.genres}</span>
                  </Box>

                  <Box direction="row" spacing={0.5} alignItems="center">
                    {/* Clock Icon */}
                    <Box
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      sx={{ width: 16, height: 16, color: "#e67e22" }}
                    >
                      <path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm1 11.59V7h-2v6l5.25 3.15.75-1.23z" />
                    </Box>
                    <span>{movie.duration}</span>
                  </Box>
                </Box>

                <Box direction="row" spacing={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#f5f5f5",
                      color: "#444",
                      borderRadius:'none',
                      fontWeight: "bold",
                      textTransform: "none",
                      transition:'all 0.6s ease',
                      marginBottom:'10px',
                      "&:hover": {
                        backgroundColor: "#f57c00",
                        color:'white',
                        transition:'all 0.6s ease'
                      },
                    }}
                  >
                    Watch Trailer
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#f5f5f5",
                      color: "#444",
                      fontWeight: "bold",
                       transition:'all 0.6s ease',
                      marginBottom:'10px',
                      "&:hover": {
                        backgroundColor: "#f57c00",
                        color:'white',
                        transition:'all 0.6s ease'
                      },
                    }}
                  >
                    Get Ticket
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Header;
