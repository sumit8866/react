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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
import main from "./Movie_3.jpg";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Transform } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Header1 from "./Header1";

const Header = () => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const dates = Array.from({ length: 11 }, (_, i) => {
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

  const moviess = [
    {
      title: "The Fifth Day",
      genres: "Comedy",
      duration: "180 Mins",
      image: Movie_2,
      className: "movie-card1",
    },
    {
      title: "Black and White Twins",
      genres: "Animation, Comedy",
      duration: "190 Mins",
      image: Movie_1,
      className: "movie-card2",
    },
    {
      title: "The Scariest Dream",
      genres: "Thriller",
      duration: "180 Mins",
      image: Movie_3,
      className: "movie-card3",
    },
    {
      title: "The Pursuit of Dreams",
      genres: "Animation",
      duration: "180 Mins",
      image: Movie_4,
      className: "movie-card4",
    },
  ];

  const upcomingMovies = [
    {
      title: "The Fifth Day",
      genres: "Comedy",
      duration: "180 Mins",
      image: Movie_2,
      className: "upcoming-movie-card1",
    },
    {
      title: "Black and White Twins",
      genres: "Animation, Comedy",
      duration: "190 Mins",
      image: Movie_1,
      className: "upcoming-movie-card2",
    },
    {
      title: "The Scariest Dream",
      genres: "Thriller",
      duration: "180 Mins",
      image: Movie_3,
      className: "upcoming-movie-card3",
    },
  ];

  const gallery_images = [
    {
      img: gallery_1,
      className: "gallery-1",
    },
    {
      img: gallery_2,
      className: "gallery-2",
    },
    {
      img: gallery_3,
      className: "gallery-3",
    },
    {
      img: gallery_4,
      className: "gallery-4",
    },
    {
      img: gallery_5,
      className: "gallery-5",
    },
  ];

  const offers = [
    {
      title: "Special Offer",
      desc: "Get 50% off on your first movie ticket purchase.",
      btn: "Claim Offer",
    },
    {
      title: "Movie of the Month",
      desc: "Check out our featured movie of the month and enjoy exclusive content.",
      btn: "Watch Now",
    },
    {
      title: "Refer a Friend",
      desc: "Invite your friends and get rewards for every successful referral.",
      btn: "Refer Now",
    },
  ];

  const icons = [
    { icon: <FaTwitter />, label: "Twitter", link: "#" },
    { icon: <FaFacebookF />, label: "Facebook", link: "#" },
    { icon: <FaPinterestP />, label: "Pinterest", link: "#" },
    { icon: <FaInstagram />, label: "Instagram", link: "#" },
  ];

  return (
    <>
      {/* header */}
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
          <Header1></Header1>
          {/* Hero section */}
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
                    sx={{ color: "#f57c00", fontFamily: "cursive" ,fontSize:{xs:'18px',sm:'25px'}}}
                    
                  >
                    Adventure Movie
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{
                      fontSize:{xs:'35px',sm:'45px',md:'50px'},
                      width:"fit-content",
                      margin:'auto',
                      transition: "all 0.6s ease",
                      "&:hover": {
                        color: "#f57c00",
                        transition: "all 0.6s ease",
                      },
                    }}
                  >
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
                      transition: "all 0.6s ease",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#f57c00",
                        transition: "all 0.6s ease",
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

      {/* top movies section */}
      <Box
        className="Top_Movies_section"
        sx={{ width: "100%", mt: { xs: "60px", md: "100px" }} }
      >
        <Box className="heading">
          <Box className="context_1">
            <img src={logo2} alt="" height={"36px"} width={"36px"} />
            <Typography variant="p" color="#f57c00" fontWeight={600} marginTop={1} marginBottom={1}>
              Checkout top movies
            </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
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
          width: "90%",
          margin: "auto",
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
              
            }}
          >
            <Box />
            <img
            style={{borderRadius:'0px'}}
              src={movie.image}
              alt={movie.title}
              width={"100%"}
              className="Movie_img"
            />
            <Box>
              <Box
                sx={{
                  maxWidth: 280,
                  margin: "auto",
                  padding: 3,
                  // border: "1px solid #eee",
                  // borderRadius: 2,
                  // boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  backgroundColor: "#fff",
                  fontFamily: "Arial, sans-serif",
                  transform: "translateY(-30px)",
                  transition: "all 0.6s ease",
                  "&:hover": {
                    transform: "translateY(-15px)",
                    transition: "all 0.6s ease",
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
                      sx={{ width: 16, height: 16, color: "#e67e22" ,verticalAlign:'middle'}}
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
                      sx={{ width: 16, height: 16, color: "#e67e22", verticalAlign:'middle'}}
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
                      borderRadius: "none",
                      fontWeight: "bold",
                      textTransform: "none",
                      transition: "all 0.6s ease",
                      marginBottom: "10px",
                      "&:hover": {
                        backgroundColor: "#f57c00",
                        color: "white",
                        transition: "all 0.6s ease",
                      },
                    }}
                  >
                    Watch Trailer
                  </Button>
                  <React.Fragment>
                    <Button
                      onClick={handleClickOpen}
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#f5f5f5",
                        color: "#444",
                        fontWeight: "bold",
                        transition: "all 0.6s ease",
                        marginBottom: "10px",
                        "&:hover": {
                          backgroundColor: "#f57c00",
                          color: "white",
                          transition: "all 0.6s ease",
                        },
                      }}
                    >
                      Get Ticket
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      sx={{ width: "80%" }}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"BOOK YOUR TICKETS"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <Box
                            sx={{
                              bgcolor: "#fdfbef",
                              minHeight: "100vh",
                              p: 2,
                            }}
                          >
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
                                  variant={
                                    selectedDate === index
                                      ? "contained"
                                      : "outlined"
                                  }
                                  sx={{
                                    minWidth: "70px",
                                    flexShrink: 0,
                                    flexDirection: "column",
                                    bgcolor:
                                      selectedDate === index ? "#000" : "#fff",
                                    color:
                                      selectedDate === index ? "#fff" : "#000",
                                    borderColor: "#ccc",
                                  }}
                                >
                                  <Typography fontSize="0.8rem">
                                    {item.date}
                                  </Typography>
                                  <Typography fontSize="0.7rem">
                                    {item.day}
                                  </Typography>
                                  <Typography fontSize="0.6rem">
                                    {item.month}
                                  </Typography>
                                </Button>
                              ))}
                            </Box>

                            {/* Region Toggle */}
                            <ToggleButtonGroup
                              value={selectedRegion}
                              exclusive
                              onChange={(e, value) =>
                                value && setSelectedRegion(value)
                              }
                              sx={{ mb: 2 }}
                            >
                              <ToggleButton value="California">
                                California
                              </ToggleButton>
                              <ToggleButton value="New York">
                                New York
                              </ToggleButton>
                            </ToggleButtonGroup>

                            {/* Format Toggle */}
                            <ToggleButtonGroup
                              value={selectedFormat}
                              exclusive
                              onChange={(e, value) =>
                                value && setSelectedFormat(value)
                              }
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
                                <Typography
                                  variant="caption"
                                  sx={{ mb: 1, display: "block" }}
                                >
                                  IMAX
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 1,
                                    flexWrap: "wrap",
                                  }}
                                >
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
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </React.Fragment>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
  overflow="hidden"
  sx={{ width: "100%", backgroundColor: "#f5f5f5", py: { xs: 4, md: 6 } }}
>
  <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, md: 8 }, backgroundColor: "#fff" }} >
    {/* Flex Container */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "flex-start",
        gap: { xs: 4, md: 6 },
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Images */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "60%", md: "50%" },
          height: { xs: 250, sm: 350, md: 440 },
          mx: "auto",
          mt: { xs: 5,sm:6 ,md: 12 },
          zIndex:'0',
          "&:hover": {
            transform: "scale(1.05)",
            transition: "transform 0.3s ease",
          },
        }}
      >
        {/* Image 1 */}
        <Box
          component="img"
          src={photo_1}
          alt="Beach"
          sx={{
            width: "50%",
            borderRadius: 2,
            transform: "rotate(-10deg)",
            position: "absolute",
            left: 0,
            top: 60,
            boxShadow: 3,
            zIndex: 1,
          }}
        />

        {/* Image 2 */}
        <Box
          component="img"
          src={photo_2}
          alt="Clown"
          sx={{
            width: "50%",
            borderRadius: 2,
            position: "absolute",
            right: 40,
            top: 60,
            boxShadow: 4,
            zIndex: 1,
            transform: "translateY(-50%) rotate(10deg)",
          }}
        />

        {/* Badge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            
            left: "50%",
            transform: {
              xs: "translateX(-50%) translateY(20%)",
              xs: "translateX(-50%) translateY(-30%)",

              md: "translateX(-50%) translateY(-180%)",
            },
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: 100,
            height: 100,
            border: "3px solid #eee",
            boxShadow: 2,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "#F26522", fontWeight: 700 }}>
            20
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Years of
            <br />
            Producing
          </Typography>
        </Box>
      </Box>

      {/* Right Side - Content */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" sx={{ color: "#F26522", mb: 1 }}>
          Get To Know Us
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          The Best Movie Ticket Distributor
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        {/* Awards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Unlimited Awards
              </Typography>
              <Typography variant="body2">
                We’ve designed a culture that allows our stewards to assimilate.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Our Directors
              </Typography>
              <Typography variant="body2">
                We’ve designed a culture that allows our stewards to assimilate.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* CTA Button */}
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{ mt: 3 }}
        >
          Discover More
        </Button>

        {/* Join Us Card */}
        <Card
          variant="outlined"
          sx={{
            mt: 4,
            backgroundColor: "#fff5f0",
          }}
        >
          <CardContent>
            <Typography variant="overline" sx={{ color: "orangered" }}>
              JOIN US
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Seeking a Career in a Movie Production
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  </Box>
</Box>


      {/* Movie Now Playing Section */}
      <Box width="100%" sx={{ bgcolor: "#000" }}>
        <Box sx={{ py: 8, width: "90%", maxWidth: "1440px", mx: "auto" }}>
          {/* Header */}
          <Box textAlign="center" mb={6}>
            <img src={logo} alt="Clapperboard" height="36" width="90" />
            <Typography
              variant="subtitle2"
              color="#f57c00"
              fontWeight="bold"
              mt={2}
            >
              Watch New Movies
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: "bold", mt: 1 }}
            >
              Movie Now Playing
            </Typography>
          </Box>

          {/* Movie Cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "center" },
              gap: 3,
              px: 2,
            }}
          >
            {moviess.map((movie, index) => (
              <Box
                key={index}
                sx={{
                  flexBasis: {
                    xs: "100%",
                    sm: "47%",
                    md: "23%",
                  },
                  flexGrow: 1,
                  maxWidth: {
                    xs: "100%",
                    sm: "47%",
                    md: "23%",
                  },
                  backgroundColor: "#121212",
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 0 15px #f57c00",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative", height: 390 }}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Overlay Info */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      p: 2,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {movie.title}
                    </Typography>
                    <Typography variant="caption" color="#f57c00">
                      {movie.genres}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="#f57c00"
                      display="block"
                    >
                      {movie.duration}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        width: "80%",
                        mt: 1,
                        backgroundColor: "#f57c00",
                        color: "#fff",
                        fontSize: "0.75rem",
                        borderRadius: "0px",
                        px: 2,
                        py: 0.5,
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#f57c00",
                        },
                      }}
                    >
                      Watch Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Gallery Section */}
      <Box width="100%">
        {/* Banner Header */}
        <Box
          height={{ xs: 100, md: 140 }}
          sx={{
            position: "relative",
            bgcolor: "#f57c00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={gallery_bg}
            alt="Gallery Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.1,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              zIndex: 1,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Our Photo Gallery
          </Typography>
        </Box>

        {/* Slider Section */}
        <Box sx={{ bgcolor: "#000", py: 4 }}>
          <Box sx={{ width: "90%", mx: "auto" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                600: { slidesPerView: 2 },
                960: { slidesPerView: 5 },
              }}
            >
              {gallery_images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    className={`gallery-card ${image.className}`}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: 4,
                      cursor: "pointer",
                      height: "350px",
                      "&:hover .overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    <img
                      src={image.img}
                      alt={`Gallery ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Gallery {index + 1}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>

      {/* upcomingMovies */}
      <Box width="100%" sx={{ bgcolor: "#000" }}>
        <Box sx={{ py: 8, width: "90%", mx: "auto", borderRadius: "10px" }}>
          {/* Header */}
          <Box textAlign="center" mb={5}>
            <img src={logo} alt="Clapperboard" height="36px" width="90px" />
            <Typography variant="subtitle2" color="#f57c00" fontWeight="bold">
              New upcoming movies
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: "bold", mt: 1 }}
            >
              Movies Coming Soon
            </Typography>
          </Box>

          {/* Movie Cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              justifyContent: { xs: "center", md: "center" },
              gap: 3,
              px: 2,
            }}
          >
            {upcomingMovies.map((movie, index) => (
              <Box
                key={index}
                sx={{
                  flexBasis: {
                    xs: "100%",
                    sm: "47%",
                    md: "25%",
                  },
                  flexGrow: 1,
                  maxWidth: {
                    xs: "100%",
                    sm: "47%",
                    md: "25%",
                  },
                  backgroundColor: "#121212",
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 0 15px #f57c00",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative", height: 390 }}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Overlay Info */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      p: 2,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {movie.title}
                    </Typography>
                    <Typography variant="caption" color="#f57c00">
                      {movie.genres}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="#f57c00"
                      display="block"
                    >
                      {movie.duration}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        width: "80%",
                        mt: 1,
                        backgroundColor: "#f57c00",
                        color: "#fff",
                        fontSize: "0.75rem",
                        borderRadius: "0px",
                        px: 2,
                        py: 0.5,
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#f57c00",
                        },
                      }}
                    >
                      Watch Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* offer section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "400px" },
          backgroundColor: "black",
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <Box>
          <img
            src={offer_bg}
            alt="Offer Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.2,
            }}
          />
        </Box>

        {/* Offer Content */}
        <Box
          sx={{
            width: "80%",
            display: "flex",
            zIndex: 2,
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          {offers.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                textAlign: "center",
                color: "white",
                p: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize:{xs:'25px',sm:'30px',md:'35px'},
                  fontWeight: "bold",
                  mb: 2,
                  color: "white",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f57c00",
                  },
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#999", mb: 3 ,fontSize:{xs:'15px',sm:'18px',md:'18px'},}}>
                {item.desc}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f57c00",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#f57c00",
                  },
                }}
              >
                {item.btn}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Locion secion  */}

      <Box width="100%" sx={{ bgcolor: "#000" }}>
        <Box sx={{ py: 8, width: "80%", mx: "auto", borderRadius: "10px" }}>
          {/* Header */}
          <Box textAlign="center" mb={5}>
            <img src={logo} alt="Clapperboard" height="36px" width="90px" />
            <Typography
              variant="subtitle2"
              color="#f57c00"
              fontWeight="bold"
              mt={2}
            >
              New upcoming movies
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontWeight: "bold", mt: 1 }}
            >
              Movies Coming Soon
            </Typography>
          </Box>

          {/* Google Maps Embed */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7061.006854920001!2d-73.99922193564265!3d40.74084807584689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bc82a46511%3A0xfc860761b1d78e34!2sInox!5e0!3m2!1sen!2sin!4v1748341580552!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, maxWidth: "100%" }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>

      {/* Footer section  */}

      <Box
        sx={{ width: "100%", backgroundColor: "#000", py: 4, color: "#fff" }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="80%"
          margin="auto"
        >
          <Box
            width={{ xs: "100%", md: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={2}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: "40%", sm: "30%" },
                height: "auto",
                maxHeight: 80,
              }}
            />
          </Box>

          <Box
            display="flex"
            width={{ xs: "100%", md: "50%" }}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="body2"
              color="gray"
              fontWeight={600}
              padding={2}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transition: "all 0.3s ease",
                  color: "#f57c00",
                },
              }}
            >
              help / Privacy Policy
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {icons.map((item, index) => (
                <IconButton
                  key={index}
                  aria-label={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f57c00",
                      transform: "translateY(5px)",
                      transition: "all 0.3s ease",
                      color: "#fff",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          py: 6,
          px: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "90%",
            margin: "auto",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* CTA */}
          <Box sx={{ flex: "200px" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Buy movie tickets easily with Aovis system nationwide
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#f57c00",
                color: "#fff",
                borderRadius: "0px",
                "&:hover": { backgroundColor: "#fff", color: "#f57c00" },
              }}
            >
              Get Your Ticket
            </Button>
          </Box>

          {/* Movies */}
          <Box display={"flex"} flex={"300px"}>
            <Box sx={{ flex: "150px" }}>
              <Typography variant="h6" sx={{ color: "#ec682c" }}>
                Movies
              </Typography>
              {["Action", "Adventure", "Animation", "Comedy", "Crime"].map(
                (genre) => (
                  <Typography key={genre} variant="body2" sx={{ mt: 1 }}>
                    {genre}
                  </Typography>
                )
              )}
            </Box>

            {/* Links */}
            <Box sx={{ flex: "150px" }}>
              <Typography variant="h6" sx={{ color: "#ec682c" }}>
                Links
              </Typography>
              {["About", "My account", "News", "Latest Events", "Contact"].map(
                (link) => (
                  <Typography key={link} variant="body2" sx={{ mt: 1 }}>
                    {link}
                  </Typography>
                )
              )}
            </Box>
          </Box>

          {/* Newsletter */}
          <Box sx={{ flex: "300px" }}>
            <Typography variant="h6" sx={{ color: "#ec682c" }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Subscribe to Leitmotif newsletter this very day.
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <TextField
                placeholder="Email Address"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                }}
              />
              <IconButton
                sx={{
                  ml: 1,
                  backgroundColor: "#ec682c",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e05d21" },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
            <FormControlLabel
              control={<Checkbox sx={{ color: "#ec682c" }} />}
              label="I agree to all terms and policies of the company"
              sx={{ mt: 2 }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", backgroundColor: "#f5f5f5", py: 4 }}>
        <Box sx={{ width: "80%", margin: "auto", textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Join Our Newsletter
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
            Subscribe to our newsletter for the latest updates and offers.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",

                color: "#f57c00",
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
