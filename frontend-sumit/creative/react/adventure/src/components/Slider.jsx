import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import herobg1 from '../image/herobgimg.jpg';
import herobg2 from '../image/slider2.jpg';
import herobg3 from '../image/slider3.jpg';

const slides = [
  {
    id: 1,
    background: herobg1,
    title: 'NEW TRIP',
    subtitle: 'DISCOVER THE COLORFUL WORLD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    background: herobg2,
    title: 'ADVENTURE TIME',
    subtitle: 'EXPLORE THE WILD',
    description:
      'Join the journey into the wilderness and uncover new trails and scenic beauty like never before.',
  },
  {
    id: 3,
    background: herobg3,
    title: 'BEACH VIBES',
    subtitle: 'SOAK IN THE SUN',
    description:
      'Relax on sunny shores and let the waves wash your worries away on our exclusive beach getaways.',
  },
];


const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 3,
        cursor: 'pointer',
        color: 'white',
      }}
    >
      <ArrowForwardIosIcon />
    </Box>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 3,
        cursor: 'pointer',
        color: 'white',
      }}
    >
      <ArrowBackIosNewIcon />
    </Box>
  );
};

const Sliders = () => {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              position: 'relative',
              height: { xs: '100dvh', md: '100vh' },
              width: '100%',
              backgroundImage: `url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
            }}
          >
            
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            />

            
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
                px: 2,
              }}
            >
              <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, letterSpacing: 1, mb: 2 }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                    maxWidth: '700px',
                    lineHeight: 1.6,
                    mx: 'auto',
                  }}
                >
                  {slide.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '30px',
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '1px solid white',
                    },
                  }}
                >
                  DISCOVER NOW
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;



